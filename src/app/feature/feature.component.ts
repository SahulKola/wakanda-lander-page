import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent {
  steps = [
    'Sign in to our website',
    'Fill out neccesary information',
    'Discover thoudsands of freelancers',
    'View freelancer’s profile and hire',
    'Complete payment & it’s time to work!',
  ];
  features = [
    {
      title: 'Professional & Fast',
      desc: "Search and hire the most talented freelancers to match your needs. No matter what you need done, we've got the perfect freelancer for you.",
      icon: 'medal',
      img: 'assets/svg/medal.svg',
    },
    {
      title: '24/7 support',
      desc: 'You have any concerns or questions? Don’t worry, we have our support team to help you at anytime and anywhere.',
      icon: 'music',
      img: 'assets/svg/music.svg',
    },
    {
      title: 'Safe & Secure',
      desc: 'We know that safety is the most important thing for our customer, so all of our payments are processed instantly and securely.',
      icon: 'secure',
      img: 'assets/svg/secure.svg',
    },
  ];
}
