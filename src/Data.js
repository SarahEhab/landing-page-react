import {  faDiamond , faFile ,faPiggyBank , faSearch , faNewspaper , faPlane , faPen , faFileText , faDotCircle } from '@fortawesome/free-solid-svg-icons'
import img1 from '../src/assets/team-1 (1).jpg'
import img2 from '../src/assets/team-2.jpg'
import img3 from '../src/assets/team-3.jpg'
import img4 from '../src/assets/team-4.jpg'
import img5 from '../src/assets/user-1.jpg'
import img6 from '../src/assets/user-2.jpg'
import img7 from '../src/assets/user-3.jpg'
import img8 from '../src/assets/blog-1 (1).jpg'
import img9 from '../src/assets/blog-2.jpg'
import img10 from '../src/assets/blog-3.jpg'


const Data = {
    serv : [
        {
          icon : faDiamond ,
          title : 'Digital Design',
          text : 'Some quick example text to build on the card title and make up the bulk of the cards content. Moltin gives you the platform.'
        },
        {   
            icon : faFile,
            title : 'Unlimited Colors',
            text : 'Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.'
         },
         {
            icon : faPiggyBank,
            title : 'Strategy Solutions',
            text : 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.'
         },

         {
            icon : faSearch,
            title : 'Awesome Support',
            text : 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.'
          },
          {
              icon : faNewspaper,
              title : 'Truly Multipurpose',
              text : 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
           },
           {
              icon : faPlane,
              title : 'Easy to customize',
              text : 'Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.'
           },
    ],
    pricing : [
      {
         title : 'ECONOMY',
         price : '$9.90 ',
         time : 'BILLING PER MONTH',
         Bandwidth : '1GB ',
         Onlinespace: '50MB',
         Support: ' No ',
         Domain : '1',
         HiddenFees : 'No'
      },
      {
         title : 'DELUXE',
         price : '$19.90 ',
         time : 'BILLING PER MONTH',
         Bandwidth : '10GB ',
         Onlinespace: '500MB',
         Support: ' Yes ',
         Domain : '10',
         HiddenFees : 'No'
      }, 
      {
         title : 'ULTIMATE',
         price : '$29.90 ',
         time : 'BILLING PER MONTH',
         Bandwidth : '100GB ',
         Onlinespace: '50MB',
         Support: ' Yes ',
         Domain : 'Unlimited1',
         HiddenFees : 'No'
      },
    ], 
    team : [
      {
       img : img1,
       name : ' Frank Johnson',
       job : 'CEO '
      },
      {
         img : img2,
         name : ' Elaine Stclair',
         job : 'DESIGNER '
        },
        {
         img : img3,
         name : ' Wanda Arthur',
         job : 'DEVELOPER '
        },
        {
         img : img4,
         name : ' Joshua Stemple',
         job : 'MANAGER '
        },
    ],
    work : [
      {
         icon : faPen ,
          title : 'Tell us what you need',
          text : 'The Big Oxmox advised her not to do so.'
      },
      {
         icon : faFileText ,
          title : 'Get free quotes',
          text : 'Little Blind Text didn’t listen..'
      },
      {
         icon : faDotCircle ,
          title : 'Deliver high quality product',
          text : 'When she reached the first hills..'
      },
    ],
   user : [
      {
         img : img5 ,
         text : ' I feel confident imposing change on myself. Its a lot more fun progressing than looking back. Thats why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.” '
      },
      {
         img : img6 ,
         text : ' Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures Integer varius lacus non magna tempor congue natuasre the whole its beauty.” '
      },
      {
         img : img7 ,
         text : 'I have learned that people will forget what you said, people will forget what you did, but people will never aliquam in nunc quis tincidunt forget how you vestibulum egestas them feel.” '
      }
   ],
   blog : [
      {
         img : img8 , 
         job : 'UI & UX Design',
         text : 'Doing a cross country road trip',
         des : 'She packed her seven versalia, put her initial into the belt and made herself on the way..'
      },
      {
         img : img9 , 
         job : 'Digital Marketing',
         text : 'New exhibition at our Museum',
         des : 'Pityful a rethoric question ran over her cheek, then she continued her way..'
      },
      {
         img : img10  , 
         job : 'Travelling',
         text : 'Why are so many people...',
         des : 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia..'
      },
    
   ]
}

export default Data