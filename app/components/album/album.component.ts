import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {Album} from '../../../Album';
import {ActivatedRoute} from '@angular/router';
// import myGlobals = require('../../my_globals'); //<==== this one

@Component({
    moduleId:module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
    directives: [ROUTER_DIRECTIVES ]
})
export class AlbumComponent { 
    id:string;
    album:Album[];
    
    constructor(
        private _spotifyService:SpotifyService,
        private _route:ActivatedRoute){
        
    }

    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })
                    
            })
    }



}