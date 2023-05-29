import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html'
})

export class IndexComponent{
    skillList = [{
            name: "Software Engineering",
            score: "80",
            description: "Qualified Software Developer equipped with programming languages, website and web application development, database management, UX/UI design, software testing, and version control, etc.",
            qualification: "Diploma in Software Engineering Technician",
            organization: "Centennial College – Toronto, Canada",
            skills: ["HTML", "CSS", "Bootstrap", "React", "Angular", "Express", "JavaScript", "Java", "C#", "Python", "SQL", "NoSQL", "MongoDB", "Github", "Figma"]
        },{
            name: "Project Management",
            score: "85",
            description: "Experienced Project Executive with years of experience in varied sizes of digital projects, such as web development or revamp, eCommerce site setup, Salesforce Marketing Cloud implementation and CRM integration, and automated journey for digital campaigns, etc.",
            qualification: "Project Management Professional (PMP) Certificate",
            organization: "Project Management Institute",
            skills: ["Agile", "SCRUM", "Jira", "Smartsheet", "Microsoft Teams"]
        },{
            name: "Digital Marketing",
            score: "90",
            description: "Professional Marketing Expert specializing in Digital Marketing, such as marketing automation, data analysis, SEO, SEM, email marketing, social media marketing, and content marketing, etc.",
            qualification: "Degree of BBA (Hons) Major in Marketing",
            organization: "The Hong Kong Polytechnic University – Hong Kong",
            skills: ["Salesforce Marketing Cloud", "Salesforce CRM", "Google Analytics", "Google Ads", "MailChimp", "Shopline", "Point of Sale System (POS)", "Facebook Chatbot", "Sitecore", "Content Managament System (CMS)", "Adobe Photoshop"]
        }]; 

    constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const headerIntro = document.querySelector('#home');
    if (!headerIntro) return;

    const headerElements = [
      headerIntro.querySelector('h2'),
      headerIntro.querySelector('h1'),
      headerIntro.querySelector('h3'),
      headerIntro.querySelector('.js-to-Scroll')
    ];

    headerElements.forEach((element, index) => {
      if (element) {
        const translateY = scrollPos / (1.5 - index * 0.9);
        const opacity = 1 - scrollPos / (180 + index * 110);
        this.renderer.setStyle(element, 'transform', `translate(0px, -${translateY}%)`);
        this.renderer.setStyle(element, 'opacity', opacity);
      }
    });

    const headerHeart = headerIntro.querySelector('.header__title__img__wrapper');
    const opacityValHeart = 1 - Math.min(scrollPos / 100, 2);
    if (headerHeart) {
      this.renderer.setStyle(headerHeart, 'transform', `translate(0px, -${scrollPos / 1}%)`);
      this.renderer.setStyle(headerHeart, 'opacity', opacityValHeart);
    }

    const alphaVal = 0.2 + Math.min(scrollPos / 950, 1);
    const rgba = `rgba(0, 0, 0, ${alphaVal})`;
    const headerOverlay = document.querySelector('.header__overlay');
    if (headerOverlay) {
      this.renderer.setStyle(headerOverlay, 'backgroundColor', rgba);
    }

    const progressBars = document.querySelectorAll('.progress-bar-animate');
      
        function isInViewport(element: HTMLElement) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }
      
        progressBars.forEach((progressBar: Element) => {
          if (isInViewport(progressBar as HTMLElement)) {
            (progressBar as HTMLElement).style.animationPlayState = 'running';
          } else {
            (progressBar as HTMLElement).style.animationPlayState = 'paused';
          }
        });    
  }
}