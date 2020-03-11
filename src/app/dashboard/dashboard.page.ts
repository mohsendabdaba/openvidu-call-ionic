import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import *  as JsSIP from 'jssip';
import { NavController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { staticViewQueryIds } from '@angular/compiler';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    responseData: any;
    error: any;
    model: any = {};
    coolPhone;
    currentSession;
    selfView = document.getElementById('local-media');
    remoteView = document.getElementById('remote-media');
    constructor(
        public navCtrl: NavController,
        public router: Router,
        private menu: MenuController,
        public platform: Platform

    ) {

        // configuration  part :
        var session;
        console.log("STARTING JSSIP");
        JsSIP.debug.enable('JsSIP:*');
        this.menu.enable(true);

        var socket = new JsSIP.WebSocketInterface('wss://gtel.tn');
        var configuration = {
            sockets: [socket],
            uri: '70200034@gtel.tn',
            password: 'aymen2014'
        };
     
        window.onload = function(){
           
            var socket = new JsSIP.WebSocketInterface('wss://gtel.tn');
            var configuration = {
                sockets: [socket],
                uri: '70200034@gtel.tn',
                password: 'aymen2014'
            };;
            var ua = new JsSIP.UA(configuration);
        
            var registerButton = document.getElementById('registerButton');
                registerButton.addEventListener("click", function () {
                    console.log('start now !')
                    if (ua.isRegistered()) {
                        ua.unregister();
                    } else {
                        ua.register();
                    }
        
                }, false);
            ua.start();
        }

        //call methods part :
        // var remoteAudio = window.document.createElement('audio');
        // window.document.body.appendChild(remoteAudio);

        // var options = {
        //     'eventHandlers': eventHandlers,
        //     media: {
        //         constraints: {
        //             audio: true,
        //             video: false,
        //         },
        //         render: {
        //             remote: {
        //                 audio: document.getElementById('remoteAudio')
        //             },

        //             local: {
        //                 audio: document.getElementById('localAudio')
        //             }
        //         }
        //     }
        // };

        //call method 1:
        // var eventHandlers = {
        //     'progress': function (e) {
        //         console.log('call is in progress');
        //     },
        //     'failed': function (e) {
        //         console.log('call failed with cause: ' + e.data.cause);
        //     },
        //     'ended': function (e) {
        //         $(document).ready(function () {
        //             var endButton = document.getElementById('endButton');
        //             endButton.addEventListener("click", function () {
        //                 session.terminate()
        //                 console.log("Call Ended");
        //             }, false);
        //         });

        //         console.log('call ended with cause: ' + e.data.cause);
        //     },
        //     'confirmed': function (e) {
        //         console.log('call confirmed');
        //     }
        // };
        // $(document).ready(function () {
        //     var callButton = document.getElementById('callButton');
        //     callButton.addEventListener("click", function () {
        //         session = myPhone.call("+21652250623", options);
        //         console.log(" make Call !");
        //     }, false);
        // });

        // session = myPhone.call("99814680", options);




        //call method 2:

        // myPhone.on("newRTCSession", function (data) {
        //     var session = data.session; // outgoing call session here
        //     var dtmfSender;
        //     var $: any;

        //       //makes the call
        //       $( document ).ready(function() {
        //         var callButton = document.getElementById('callButton');
        //         callButton.addEventListener("click", function () {
        //             session = myPhone.invite('99814680', options);
        //             session.on("accepted", function () {
        //             myPhone.call("99814680");
        //         });
        //             console.log(" make Call");
        //         }, false);
        //     });

        //     session.on("confirmed", function () {
        //         //the call has connected, and audio is playing
        //         var localStream = session.connection.getLocalStreams()[0];
        //         dtmfSender = session.connection.createDTMFSender(localStream.getAudioTracks()[0])
        //     });
        //     session.on("ended", function () {
        //         //the call has ended
        //     });
        //     session.on("failed", function () {
        //         // unable to establish the call
        //     });
        //     session.on('addstream', function (e) {
        //         // set remote audio stream (to listen to remote audio)
        //         // remoteAudio is <audio> element on page
        //         remoteAudio.src = window.URL.createObjectURL(e.stream);
        //         remoteAudio.play();
        //     });

        //     //play a DTMF tone (session has method `sendDTMF` too but it doesn't work with Catapult server right)
        //     dtmfSender.insertDTMF("1");
        //     dtmfSender.insertDTMF("#");

        //     //mute call
        //     session.mute({ audio: true });

        //     //unmute call
        //     session.unmute({ audio: true });

        //     //to hangup the call
        //     $( document ).ready(function() {
        //     var endButton = document.getElementById('endButton');
        //     endButton.addEventListener("click", function () {
        //         session.terminate();
        //         console.log("Call Ended");
        //     }, false);
        // });


        // });




    }

    ngOnInit() { }

    

    // async login(form: NgForm) {
    //     this.call_Service.constructor(form.value.WebSocketServer, form.value.SipAdress, form.value.password)
    //         .subscribe(() => {
    //             // this.router.navigateByUrl('/my-espace');
    //             console.log('register true ')
    //         });
    // }




}
