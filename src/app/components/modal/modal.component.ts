import { Component  } from "@angular/core";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
})

export class ModalComponent{
    projectList = [{
        id: "project1",
        name: "Facebook Chatbot Implementation",
        image: ["project1-1.jpg", "project1-2.jpg", "project1-3.jpg"],
        description: "Designed and managed the Facebook Messenger Chatbot Implementation for premium cruise line brands in two phrases. The first release has efficiently minimized more than 80% manual enquiry handling. The second release has expanded to sales-driven promotion and assisted 10% of online sales. This project is awarded by Marketing Magazine's Mob-ex Awards",
        technology: ["Google Analytics", "Facebook Chatbot", "Adobe Photoshop"]
    },{
        id: "project2",
        name: "Digital Referral Campaign",
        image: ["project2-1.jpg", "project2-2.jpg"],
        description: "Set up automated journeys on the Salesforce Marketing Cloud to support a digital referral campaign with automated and personalized customer engagement and managed the project from campaign site development, system integration, to testing. This campaign has gained more than 4,000 new subscribers from existing databases.",
        technology: ["Figma", "Salesforce Marketing Cloud", "Google Analytics", "Content Managament System (CMS)", "Adobe Photoshop"]
    },{
        id: "project3",
        name: "Membership Platform eCommerce Site",
        image: ["project3-1.jpg", "project3-2.jpg"],
        description: "Designed and developed a membership platform using Shopline, an Asian's leading ecommerce website builder, and strategically transformed the traditional ecommerce system into a prepaid membership point redemption system. This platform has successfully recruited more than 100 premium members and generated about HK$100K sales in a year.",
        technology: ["HTML", "CSS", "Figma", "Smartsheet", "Google Analytics", "Shopline", "Adobe Photoshop"]
    },{
        id: "project4",
        name: "Event Management & Ticketing Site",
        image: ["project4-1.png", "project4-2.png", "project4-3.png"],
        description: "Designed and developed the front end of this event management & ticketing site using Angular and connecting with MongoDB. It is a platform that allows event hosts to create and manage their events for users to register and event seekers to search for and comment on their interested events with keyword search, sorting and filtering functions.",
        technology: ["HTML", "CSS", "Bootstrap", "Angular", "JavaScript", "MongoDB", "Github", "Jira"]
    },{
        id: "project5",
        name: "Temporary Dental Staffing Site",
        image: ["project5-1.jpg", "project5-2.jpg", "project5-3.jpg"],
        description: "Designed and developed the front end of this temporary staffing web application using React and connecting with MongoDB, Stripe, and push notification service in 11 Scrum sprint cycles. It allows dental clinic personnel to create and manage shifts and confirm applied staff for each clinic location; temporary staff members to search and apply for shifts according to their working distance set; and administrator to message to and manage all users.",
        technology: ["HTML", "CSS", "Bootstrap", "React", "JavaScript", "MongoDB", "Github", "Figma", "Agile", "SCRUM", "Jira"]
    }]; 

    constructor() { }
}