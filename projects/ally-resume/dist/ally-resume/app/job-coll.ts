import { Job } from "./job";
export class JobColl {
    public jobs:Job[] = []
    
    constructor() {
        this.jobs = [
            new Job("Kitchen Team Member", "2 Bar Bowl", "I would do a couple things including cook meals for customers and prepare ingredients for the other cooks", 
                ['line cook','food prep', 'coordinate with others'], "https://www.2barbowl.com/", "2023-10-10", "2023-12-10", "Paul"
                ),
            new Job("Sales Associate", "Spirit Halloween", "I would guide customers to what would make their costumes or decorations work better." +
                "I would also cash out customers on Spirit's POS systems. In addition, I would stock any materials" +
                "or inventory that arrived", ['sales','stock inventory', 'cash register', 'customer service', 'coordinate with others'], "https://www.spirithalloween.com/", 
                "2023-08-10", "2023-11-10", "Crista"),
            new Job("Cashier/Sales Associate", "Go! Calendar Games and Toys", "When I worked here, I would not only help customers find what they're looking for, but I would try to add on"+
                "to their total however I could. After they were done, I would ring them up on the company designed registers", ['sales','stock inventory', 'cash register', 'customer service', 'coordinate with others'],
                "https://goretailgroup.com/", "2023-02-10", "2023-08-10", "Carla"),
            new Job("Driver Helper", "UPS", "When working for UPS, I would work with the drivers to get the packages ready for them. "+
                "By doing this, the routes could be completed much quicker.", ['detail-orientation','agile', 'coordinate with others'],
                "https://ups.com/", "2022-11-10", "2023-1-10", "Ashley or James"),
            new Job("Cashier and Customer Service" , "Albertsons", "When I was working for Albertsons, I would take customer concerns"+
                "and process them the best I could. If I was unable to adress them, I would pass"+
                "them up to my superiors", ['customer service','cash register', 'coordinate with others'], "https://www.albertsons.com/", "2022-10-10", 
                "2023-02-10", "Chris"),
            new Job("Bakery Associate", "Albertsons", "In this role, I would primarily package what others would bake. "+
                "I would also proof the baked goods to prepare them for baking", ['customer service','proof baked goods', 'coordinate with others', 'package baked goods'],
                "https://www.albertsons.com/", "2022-8-10", "2022-10-10", "Chris"),
            new Job("Cashier/Customer Service", "Soma", "While working for Soma, I worked with customers to ensure they got what they requested and tried to upsell. "+
                "I would take their measurements if getting undergarments and alert them of any sales that the store might be having. "+
                "I would also try to sell the on the idea of a gift card for friends and family.", ['detail-orientation','communication', 'sales', 'customer service', 'coordinate with others'], 
                "https://www.soma.com", "2022-11-10", "2023-1-10", "Ashley or James"),
            new Job("Prep Cook/Dishwasher", "Nordy's", "At Nordy's I would be required to work with the cooks and the bussers "+
                "to ensure efficient use of water and my time", ['wash dishes','clean', 'food prep', 'cook'], "http://www.nordysbbq.com/", 
                "2021-12-15", "2022-06-10", "Nordy"),
            new Job("Server/Busser" , "Giordano's", "I would take customers' orders and bring them out. "+
                "After they were done, I would also clean the tables of the dishes and deliver them to the dishwasher",
                ['take orders','clean', 'food service'], "https://giordanos.com/", "2021-09-10", "2021-12-10",  "My old boss"),
            new Job("Cashier/Customer Service", "Love's Travel Center", "I would check out customers.",
                ['cash register','customer service'], "https://www.loves.com/", "2021-09-10", "2021-11-10", "My old boss"),
            new Job("Cashier/Customer Service" , "Kum & Go", "I would check out customers.", ['cash register','customer service'],
                "https://www.kumandgo.com/", "2021-05-10", "2021-09-10", "My old boss"),
            new Job("Crew Member", "Taco Bell", "I would check out customers and prepare food for them.", 
                ['cash register','customer service', 'food prep', 'fryers'], "https://www.tacobell.com/", "2021-03-10",
                "2021-04-10", "My old boss"),
            new Job("Crew Member", "Wendy's", "I would check out customers and prepare food for them.", ['cash register','customer service', 'food prep', 'fryers'],
                "https://www.wendys.com/", "2021-03-10", "2021-04-10", "My old boss"),
            new Job("Cashier/Sales Associate", "Burlinton Coat Factory", "I would check out customers and prepare items for them.", 
                ['cash register','customer service'], "https://www.burlington.com/", "2020-06-10", "2021-01-10", "My old boss"),
            new Job("Package Handler/Sorter", "FedEx Ground", "I would work with customers' packages and sort them into their specified position to expedite delivery",
                ['coordinate with others','detail-orientation', 'handle hazardous materials'],"https://www.fedex.com/", "2020-02-10", "2020-05-10", "My old boss"),
            new Job("Receiving Associate/Sales Associate", "Burlinton Coat Factory", "During my time in this role, I would typically unload deliveries from trucks and organize them into new or existing systems",
                ['coordinate with others','detail-orientation', 'handle hazardous materials', 'operate PITs'], "https://www.burlington.com/", "2019-09-10", "2020-01-10", "My old boss"),
            new Job("Dishwasher/Prep Cook", "CSU Ramskeller", "During my time here, I would be required to work with the cooks and the bussers "+
                "to ensure efficient use of water and my time", ['wash dishes','clean', 'food prep', 'cook'], "https://lsc.colostate.edu/dining/ramskeller/",
                "2018-07-10", "2018-11-10", "My old boss"),
            new Job("Prep Cook/Cashier", "Papa John's", "Prepare food for customers, answer calls, and provide customer service.", ['wash dishes','clean', 'food prep', 'cook', 'phone use'],
                "https://www.papajohns.com/", "2018-02-10", "2018-04-10", "My old boss"),
            new Job("Corps Member" , "California Conservation Corps", "Ensure safety of park goers using woodland knowledge and maintain cleanliness of area.", ['woodland work', 'operate chainsaw', 'perform CPR', 'phone use'], 
                "http://ccc.ca.gov/", "2017-09-10", "2017-12-10", "My old boss"),
            new Job("Office Assistant", "Long Beach Job Corps", "- Operate office machines, such as photocopiers and scanners, fax machines, voice mail systems, and personal computers "+
                "- Answer telephones, direct calls, and take messages, communicate with customers, employees, and other individuals to answer questions, "+
                "disseminate or explain information, take orders, and address complaints", ['office work', 'communicate with clients and customers', 'coordinate with others', 'phone use'], 
                "https://longbeach.jobcorps.gov/", "2016-06-10", "2017-07-10", "My old boss"),
            new Job("Glazing Pre-Apprentice", "Long Beach Job Corps","-Worked various positions at job site with hands on experience "+
                "\n-Installed glass shelves \n-Window fixtures",['hardware tools', 'glass installation', 'coordinate with others', 'phone use', 'glass cutting', 'wood working', 'aluminum working'],
                "https://longbeach.jobcorps.gov/", "2015-06-10", "2016-06-10", "My old boss"),
            new Job("Volunteer, Long Beach Job Corps", "Long Beach Job Corps", "- General Janitorial Duties"+
            "\n- Restock supply closet\n- Light duty lifting\n- Maintain Restrooms",['clean'], "https://longbeach.jobcorps.gov/", "2015-06-10", "2015-07-10", "My old boss")
        ]
        
    }

    public get jobList() : Job[] {
        return this.jobs
    }
}
