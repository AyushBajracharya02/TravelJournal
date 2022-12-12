import fuji from '../Images/Location Images/fuji.jpg';
import sydneyoperahouse from '../Images/Location Images/sydneyoperahouse.jpg';
import geirangerfjord from '../Images/Location Images/geirangerfjord.jpg';

const locationdata = [
    {
        id: 1,
        name: "Mount Fuji",
        img: fuji,
        country: "Japan",
        date: {
            start: "12 Jan, 2021",
            end: "24 Jan, 2021"
        },
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        link: "https://www.google.com/maps/place/Mount+Fuji/@35.3606422,138.7186086,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634"
    },
    {
        id: 2,
        name: "Sydney Opera House",
        img: sydneyoperahouse,
        country: "Australia",
        date: {
            start: "27 May, 2021",
            end: "8 Jun, 2021"
        },
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        link: "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567799,151.213108,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967"
    },
    {
        id: 3,
        name: "Geirangerfjord",
        img: geirangerfjord,
        country: "Norway",
        date: {
            start: "01 Oct, 2021",
            end: "18 Nov, 2021"
        },
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        link: "https://www.google.com/maps/place/Geirangerfjord/@62.1049113,7.0051735,12z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817"
    },
]

export default locationdata;