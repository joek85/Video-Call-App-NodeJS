
export default {
record(){
    var canvas = document.getElementById( 'videos' );
    var recorder = new RecordRTC(canvas, {
        type: 'canvas'
    });
    recorder.startRecording();
    console.log(canvas)
},
}
