import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  compteur = 0

  previus(){
    const TL = gsap.timeline();
    if(this.compteur === 1){
      TL
        .to('.block-2',{
          xPercent: '*',
          duration: 1,
          delay: .4,
          ease: 'Power4.easeInOut'
        })
        .to('.block-1',{
          xPercent: '*',
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<")
        .to('.row-text',{
          y: '*',
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<")
        .to('.text-2',{
          display: 'none',
          duration: .1
        },"<")
        .to('.text-1',{
          display: 'block',
          duration: .1
        },"<")
        .from('.texts-0',{
          y: '26px',
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<-.1")
        this.compteur--;
    }else{
      if(this.compteur === 2){
        TL
        .to('.block-3',{
          xPercent: '*',
          duration: 1,
          delay: .4,
          ease: 'Power4.easeInOut'
        })
        .to('.block-2',{
          xPercent: -100,
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<")
        .to('.row-text',{
          y: '-85px',
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<")
        .to('.text-3',{
          display: 'none',
          duration: .1
        },"<")
        .to('.text-2',{
          display: 'block',
          duration: .1
        },"<")
        .from('.texts-1',{
          y: '26px',
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<-.1")
        this.compteur--;
      }
    }
  }

  next(){
    const TL = gsap.timeline();
    if(this.compteur ===0){
      TL
        .to('.block-2',{
          xPercent: -100,
          duration: 1,
          delay: .4,
          ease: 'Power4.easeInOut'
        })
        .to('.block-1',{
          xPercent: -30,
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<.1")
        .to('.row-text',{
          y: '-85px',
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<")
        .to('.text-1',{
          display: 'none',
          duration: .1
        },"<")
        .to('.text-2',{
          display: 'block',
          duration: .1
        },"<")
        .from('.texts-1',{
          y: '26px',
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<-.1")
        this.compteur++;
    }else{
      if(this.compteur === 1){
        TL
        .to('.block-3',{
          xPercent: -100,
          duration: 1,
          delay: .4,
          ease: 'Power4.easeInOut'
        })
        .to('.block-2',{
          xPercent: -130,
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<.1")
        .to('.row-text',{
          y: '-170px',
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<")
        .to('.text-2',{
          display: 'none',
          duration: .1
        },"<")
        .to('.text-3',{
          display: 'block',
          duration: .1
        },"<")
        .from('.texts-2',{
          y: '26px',
          duration: 1,
          ease: 'Power4.easeInOut'
        },"<-.1")
        this.compteur++;
      }
    }
  }
}
