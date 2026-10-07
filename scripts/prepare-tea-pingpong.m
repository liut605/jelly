#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>
#import <CoreVideo/CoreVideo.h>
int main(int argc,const char *argv[]) { @autoreleasepool {
 AVURLAsset *asset=[AVURLAsset URLAssetWithURL:[NSURL fileURLWithPath:@(argv[1])] options:nil];
 AVAssetImageGenerator *gen=[AVAssetImageGenerator assetImageGeneratorWithAsset:asset];gen.appliesPreferredTrackTransform=YES;gen.requestedTimeToleranceBefore=kCMTimeZero;gen.requestedTimeToleranceAfter=kCMTimeZero;
 NSMutableArray *frames=[NSMutableArray array]; NSError *error=nil;
 for(int i=0;i<=24;i++){CGImageRef frame=[gen copyCGImageAtTime:CMTimeMake(i,24) actualTime:nil error:&error];if(!frame){NSLog(@"%@",error);return 1;}[frames addObject:CFBridgingRelease(frame)];}
 AVAssetWriter *writer=[[AVAssetWriter alloc] initWithURL:[NSURL fileURLWithPath:@(argv[2])] fileType:AVFileTypeMPEG4 error:&error];
 AVAssetWriterInput *input=[AVAssetWriterInput assetWriterInputWithMediaType:AVMediaTypeVideo outputSettings:@{AVVideoCodecKey:AVVideoCodecTypeH264,AVVideoWidthKey:@1920,AVVideoHeightKey:@1064,AVVideoCompressionPropertiesKey:@{AVVideoAverageBitRateKey:@6500000,AVVideoMaxKeyFrameIntervalKey:@24}}];
 NSDictionary *attrs=@{(id)kCVPixelBufferPixelFormatTypeKey:@(kCVPixelFormatType_32ARGB),(id)kCVPixelBufferWidthKey:@1920,(id)kCVPixelBufferHeightKey:@1064,(id)kCVPixelBufferCGImageCompatibilityKey:@YES,(id)kCVPixelBufferCGBitmapContextCompatibilityKey:@YES};
 AVAssetWriterInputPixelBufferAdaptor *adaptor=[AVAssetWriterInputPixelBufferAdaptor assetWriterInputPixelBufferAdaptorWithAssetWriterInput:input sourcePixelBufferAttributes:attrs];
 [writer addInput:input];[writer startWriting];[writer startSessionAtSourceTime:kCMTimeZero];
 CGColorSpaceRef color=CGColorSpaceCreateWithName(kCGColorSpaceSRGB);
 for(int i=0;i<48;i++) { @autoreleasepool {
  while(!input.readyForMoreMediaData){if(writer.status==AVAssetWriterStatusFailed){NSLog(@"%@",writer.error);return 1;}[NSThread sleepForTimeInterval:.005];}
  CVPixelBufferRef buffer=NULL;CVPixelBufferPoolCreatePixelBuffer(NULL,adaptor.pixelBufferPool,&buffer);CVPixelBufferLockBaseAddress(buffer,0);
  CGContextRef ctx=CGBitmapContextCreate(CVPixelBufferGetBaseAddress(buffer),1920,1064,8,CVPixelBufferGetBytesPerRow(buffer),color,kCGImageAlphaNoneSkipFirst);
  CGContextDrawImage(ctx,CGRectMake(0,0,1920,1064),(__bridge CGImageRef)frames[i<=24?i:48-i]);CGContextRelease(ctx);CVPixelBufferUnlockBaseAddress(buffer,0);
  if(![adaptor appendPixelBuffer:buffer withPresentationTime:CMTimeMake(i,24)]){NSLog(@"%@",writer.error);return 1;}CVPixelBufferRelease(buffer);
 }}
 CGColorSpaceRelease(color);[input markAsFinished];[writer endSessionAtSourceTime:CMTimeMake(2,1)];
 dispatch_semaphore_t done=dispatch_semaphore_create(0);[writer finishWritingWithCompletionHandler:^{dispatch_semaphore_signal(done);}];dispatch_semaphore_wait(done,DISPATCH_TIME_FOREVER);
 NSLog(@"status=%ld error=%@",(long)writer.status,writer.error);return writer.status==AVAssetWriterStatusCompleted?0:1;
}}
