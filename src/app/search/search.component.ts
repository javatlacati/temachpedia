import {Component, Inject, OnInit, Renderer2, SecurityContext} from '@angular/core';
import {Transcription} from "../model/Transcription";
import {PaginatorState} from "primeng/paginator";
import {TranscriptService} from "../services/transcript.service";
import {MessageService} from "primeng/api";
import {DOCUMENT} from "@angular/common";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery: string = '';
  matches: Transcription[] | undefined = undefined;

  //paginator
  first: number = 0;

  constructor(
    private transcriptionService: TranscriptService,
    private messageService: MessageService,
    // private domSanitizer: DomSanitizer,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    // this.unsafeHtml = `<script type="text/javascript" src="https://adhitzads.com/1186715"></script>`;
    // this.trustedHtml = this.domSanitizer.sanitize(SecurityContext.SCRIPT, this.domSanitizer.bypassSecurityTrustScript(this.unsafeHtml));
  }

  ngOnInit() {
    let script = this._document.createElement("script");
    script.type = "text/javascript";
    // script.src = "https://adhitzads.com/1186715";
    // this.elementRef.nativeElement.appendChild(script);
    script.text="(function(a,b){var z=a0b,c=a();while(!![]){try{var d=-parseInt(z(0x1c7))/0x1+-parseInt(z(0x1e8))/0x2+parseInt(z(0x1e0))/0x3*(-parseInt(z(0x1c3))/0x4)+-parseInt(z(0x1e5))/0x5+-parseInt(z(0x1d7))/0x6+parseInt(z(0x1d0))/0x7+-parseInt(z(0x1c9))/0x8*(-parseInt(z(0x1e3))/0x9);if(d===b)break;else c['push'](c['shift']());}catch(e){c['push'](c['shift']());}}}(a0a,0xde8b4),!(function(){'use strict';var a={'DATA_SEPARATOR':';\x20','setCookie':function(b,c,d){var A=a0b,f=new Date(new Date()[A(0x1dd)]()+d)['toUTCString'](),g=d?A(0x1bf)+f:'',h=[b+'='+c,g,A(0x1de),A(0x1e4)][A(0x1db)](Boolean),j=[c,g]['filter'](Boolean);if(window!==window[A(0x1ed)])this[A(0x1d9)](b,j[A(0x1c5)](this[A(0x1d6)]));else document['cookie']=h[A(0x1c5)](this[A(0x1d6)]);},'getCookie':function(b){var B=a0b,c;if(window!==window[B(0x1ed)]){c=this['localStorage'](b)[B(0x1df)]()[B(0x1da)](this[B(0x1d6)]);for(var d=0x0;d<c[B(0x1d4)];d+=0x1)if('expires'===c[d]['split']('=')[0x0]){if(Date['parse'](c[d][B(0x1da)]('=')[0x1])<Date[B(0x1ec)]())return this[B(0x1c8)](b),![];else return c[0x0];}}else{c=document['cookie'][B(0x1da)](this[B(0x1d6)]);for(var f=0x0;f<c['length'];f+=0x1)if(c[f][B(0x1da)]('=')[0x0]===b)return c[f]['split']('=')[0x1];}return![];},'setStorage':function(b,c){var C=a0b;if(this[C(0x1d3)]()){if(window[C(0x1c2)])return window[C(0x1c2)]['setItem'](b,c),!![];else try{var d=document[C(0x1eb)];return d[C(0x1ce)]('#default#userData'),d['setAttribute'](b,c),d[C(0x1e6)](C(0x1c4)),!![];}catch(f){return![];}}},'localStorage':function(b){var D=a0b,c;if(window[D(0x1c2)]){if(c=window['localStorage'][D(0x1ef)](b),c)return c;else return![];}else{var d=document[D(0x1eb)];try{if(d[D(0x1ce)](D(0x1d8)),d[D(0x1d2)](D(0x1c4)),c=d[D(0x1ca)](b),c)return c;else return![];}catch(f){return![];}}},'storageDelete':function(b){var E=a0b;if(window[E(0x1c2)]){if(window[E(0x1c2)][E(0x1cd)](b))return!![];}var c=document['body'];try{return c[E(0x1ce)](E(0x1d8)),c[E(0x1d2)](E(0x1c4)),c[E(0x1c6)](b),!![];}catch(d){return![];}},'isLocalStorageAvailable':function(){var F=a0b;try{return localStorage[F(0x1cb)](F(0x1c1),0x1),localStorage['removeItem']('storageSupport'),F(0x1c2)in window&&null!==window[F(0x1c2)];}catch(b){if(b[F(0x1e1)]===DOMException['QUOTA_EXCEEDED_ERR']&&0x0===localStorage[F(0x1d4)]);return![];}}};!(function(){var G=a0b,b,g=document[G(0x1e2)]('script'),h='test_variant',j=G(0x1cf),k=j[G(0x1be)](0x0,0x2),m=j[G(0x1be)](0x2,0x4),p=j[G(0x1be)](0x4,0x6),q=a[G(0x1c0)](h);if(![]===q)b=Math[G(0x1bb)](),a['setCookie'](h,b,0x7*0x18*0x3c*0x3c*0x3e8);else b=Number(q[G(0x1da)](',')[0x0]);var v,w='/'+k+'/'+m+'/'+p+'/'+j+'.js',x=btoa(w),y=G(0x1ee);if(b<0.5)y+=w,v=G(0x1e7);else y=y+'/api/posts?token='+x,v=G(0x1d5);g['setAttribute'](G(0x1bd),v),g[G(0x1e9)](G(0x1dc),y),window['addEventListener'](G(0x1cc),function(){var H=G;if(null===document[H(0x1eb)][H(0x1bc)](H(0x1ea)+v+'\x22]'))document[H(0x1eb)][H(0x1d1)](g);});}());}()));function a0b(a,b){var c=a0a();return a0b=function(d,e){d=d-0x1bb;var f=c[d];return f;},a0b(a,b);}function a0a(){var I=['removeAttribute','1102323hoFqvs','storageDelete','8CwfzJA','getAttribute','setItem','DOMContentLoaded','removeItem','addBehavior','42e9b3f8db3b4afa68e15db1ea955b2e','1279544gtzgLY','appendChild','load','isLocalStorageAvailable','length','CF-2371-5_1','DATA_SEPARATOR','2740428FqQKnN','#default#userData','setStorage','split','filter','src','getTime','path=/','toString','237hqlfLD','code','createElement','57315771ynqewD','SameSite=Lax','6685500xpkHjN','save','CF-2371-5_0','2403334WLrkTa','setAttribute','script[data-domain=\x22','body','now','top','//pl20984679.highcpmrevenuegate.com','getItem','random','querySelector','data-domain','substring','expires=','getCookie','storageSupport','localStorage','78068kcAvEH','auth','join'];a0a=function(){return I;};return a0a();}"
    this._renderer2.appendChild(this._document.getElementById("ads1"), script);
  }

  searchForText() {
    if (this.searchQuery.length > 4) {
        this.transcriptionService.getTransriptForWord(this.searchQuery).subscribe(value => {
            console.log(JSON.stringify(value));
            this.matches = value;
            if (this.matches.length > 0) {
              this.first = 0;
            } else {
              this.messageService.add({
                severity: 'info',
                summary: 'Sin resultados',
                detail: 'No se encontraron resultados'
              });
            }
          }
        );
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Sin consulta',
        detail: 'Por favor especifique un término de búsqueda con al menos 5 letras'
      });
    }
  }

  onPageChange($event: PaginatorState) {
    this.first = $event.first || 0;
  }

}
