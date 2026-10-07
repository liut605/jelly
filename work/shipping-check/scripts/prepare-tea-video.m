#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>
#import <ImageIO/ImageIO.h>
int main(int argc,const char *argv[]) { @autoreleasepool {
 AVURLAsset *source=[AVURLAsset URLAssetWithURL:[NSURL fileURLWithPath:@(argv[1])] options:nil];
 AVAssetTrack *video=[[source tracksWithMediaType:AVMediaTypeVideo] firstObject];
 AVMutableComposition *comp=[AVMutableComposition composition];
 AVMutableCompositionTrack *track=[comp addMutableTrackWithMediaType:AVMediaTypeVideo preferredTrackID:kCMPersistentTrackID_Invalid];
 NSError *error=nil;[track insertTimeRange:CMTimeRangeMake(kCMTimeZero,source.duration) ofTrack:video atTime:kCMTimeZero error:&error];
 if(error){NSLog(@"%@",error);return 1;}
 AVMutableVideoComposition *render=[AVMutableVideoComposition videoComposition];render.renderSize=CGSizeMake(1920,1064);render.frameDuration=CMTimeMake(1,24);
 AVMutableVideoCompositionInstruction *instruction=[AVMutableVideoCompositionInstruction videoCompositionInstruction];instruction.timeRange=CMTimeRangeMake(kCMTimeZero,source.duration);
 AVMutableVideoCompositionLayerInstruction *layer=[AVMutableVideoCompositionLayerInstruction videoCompositionLayerInstructionWithAssetTrack:track];[layer setTransform:CGAffineTransformMakeTranslation(0,-8) atTime:kCMTimeZero];instruction.layerInstructions=@[layer];render.instructions=@[instruction];
 for(NSString *name in @[@"tea-blossoms.mp4",@"tea-blossoms-idle.mp4"]) {
  AVAssetExportSession *session=[[AVAssetExportSession alloc] initWithAsset:comp presetName:AVAssetExportPresetHighestQuality];session.videoComposition=render;
  session.outputURL=[NSURL fileURLWithPath:[@(argv[2]) stringByAppendingPathComponent:name]];session.outputFileType=AVFileTypeMPEG4;session.shouldOptimizeForNetworkUse=YES;
  session.timeRange=CMTimeRangeMake(kCMTimeZero,[name containsString:@"idle"]?CMTimeMake(1,1):source.duration);
  dispatch_semaphore_t done=dispatch_semaphore_create(0);[session exportAsynchronouslyWithCompletionHandler:^{dispatch_semaphore_signal(done);}];dispatch_semaphore_wait(done,DISPATCH_TIME_FOREVER);
  if(session.status!=AVAssetExportSessionStatusCompleted){NSLog(@"%@",session.error);return 1;}
  AVURLAsset *out=[AVURLAsset URLAssetWithURL:session.outputURL options:nil];NSLog(@"%@ duration=%f",name,CMTimeGetSeconds(out.duration));
 }
 AVURLAsset *full=[AVURLAsset URLAssetWithURL:[NSURL fileURLWithPath:[@(argv[2]) stringByAppendingPathComponent:@"tea-blossoms.mp4"]] options:nil];
 AVAssetImageGenerator *gen=[AVAssetImageGenerator assetImageGeneratorWithAsset:full];gen.appliesPreferredTrackTransform=YES;
 CGImageRef image=[gen copyCGImageAtTime:kCMTimeZero actualTime:nil error:&error];if(!image){NSLog(@"%@",error);return 1;}
 NSURL *url=[NSURL fileURLWithPath:[@(argv[2]) stringByAppendingPathComponent:@"tea-blossoms-poster.jpg"]];
 CGImageDestinationRef dst=CGImageDestinationCreateWithURL((__bridge CFURLRef)url,CFSTR("public.jpeg"),1,NULL);
 CGImageDestinationAddImage(dst,image,(__bridge CFDictionaryRef)@{(NSString *)kCGImageDestinationLossyCompressionQuality:@0.94});CGImageDestinationFinalize(dst);CFRelease(dst);CGImageRelease(image);
}return 0;}
