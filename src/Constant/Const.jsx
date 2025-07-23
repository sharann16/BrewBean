
import Cappuccioni from "../assets/Hot Beverages/cappuccino.webp";
import MatchaLatte from "../assets/Hot Beverages/matcha-latte-cup.jpg";
import MasalaChai from "../assets/Hot Beverages/masala chai.jpg";
import HotChocolate from "../assets/Hot Beverages/musmillow.jpg";
import TurmericLatte from "../assets/Hot Beverages/golden-milk-latte.webp";
import SouthIndianFilterCoffee from "../assets/Hot Beverages/masala chai.jpg";
import ClassicColdBrew from "../assets/Cold Brews/Classic Cold Brew.jpg";
import MochaColdBrew from "../assets/Cold Brews/MochaColdBrew.jpg";
import VanillaSweetCreamColdBrew from "../assets/Cold Brews/vennila sweet cream.jpg";
import BananaMuffin from "../assets/Pastries/Banana Muffin.jpg";
import ChocolateBrownie from "../assets/Pastries/Chocolate Brownie.jpg";
import Croissant from "../assets/Pastries/Croissant.webp";
export const navItems = [
    {
        name:"home",
        link:"#"
    },
    {
        name:"menu",
        link:"#menu"
    },
    {
        name:"about us",
        link:"#aboutus"
    },
    {
        name:"contact us",
        link:"#contact"
    }
]
export const HotBeverages = [
    {
        name: "Cappuccino",
        description: "Rich espresso with steamed milk and a thick layer of foam",
        price: "₹120",
        image: Cappuccioni
    },
    {
        name: "Matcha Latte",
        description: "Smooth Japanese green tea blended with steamed milk",
        price: "₹140",
        image: MatchaLatte
    },
    {
        name: "Masala Chai",
        description: "Traditional Indian spiced tea with milk and herbs",
        price: "₹90",
        image: MasalaChai
    },
    {
        name: "Hot Chocolate with Marshmallows",
        description: "Creamy hot cocoa topped with fluffy marshmallows",
        price: "₹130",
        image: HotChocolate
    },
    {
        name: "Turmeric Latte (Golden Milk)",
        description: "Warm milk infused with turmeric, ginger, and spices",
        price: "₹110",
        image: TurmericLatte
    },
    {
        name: "South Indian Filter Coffee",
        description: "Bold decoction coffee served with frothy milk in a steel tumbler",
        price: "₹100",
        image: SouthIndianFilterCoffee
    }
];

export const ColdBrews = [
    {
        name: "Classic Cold Brew",
        description: "Smooth, bold coffee steeped for hours and served over ice",
        price: "₹140",
        image: ClassicColdBrew
    },
    {
        name: "Mocha Cold Brew",
        description: "Cold brew infused with rich chocolate notes, served chilled",
        price: "₹150",
        image: MochaColdBrew
    },
    {
        name: "Vanilla Sweet Cream Cold Brew",
        description: "Cold brew topped with a swirl of vanilla-infused sweet cream",
        price: "₹160",
        image: VanillaSweetCreamColdBrew
    }
];

export const Pastries = [
    {
        name: "Banana Muffin",
        description: "Soft and moist muffin with rich banana flavor",
        price: "₹70",
        image: BananaMuffin
    },
    {
        name: "Chocolate Brownie",
        description: "Dense and fudgy chocolate dessert with a crisp top",
        price: "₹90",
        image: ChocolateBrownie
    },
    {
        name: "Croissant",
        description: "Flaky and buttery classic French pastry",
        price: "₹80",
        image: Croissant
    }
];

export const aboutUs=
    {
        header: "Our Story",
        body: "Brew & Bean was born out of a deep love for coffee and community. What started as a small neighborhood café has now become a cozy corner for coffee lovers, creatives, and casual catch-ups.\n\nWe believe in keeping things simple, fresh, and soulful. Every cup we serve is brewed with quality beans, sourced locally and ethically. Our pastries are made fresh every morning, and our team is trained to make sure you feel right at home — every single time.",
        coreValues: [
            {
                icon: "☕",
                title: "Quality First",
                description: "We serve only the best brews."
            },
            {
                icon: "🧑‍🌾",
                title: "Locally Sourced",
                description: "Supporting farmers and small vendors."
            },
            {
                icon: "😊",
                title: "Friendly Vibes",
                description: "We treat every guest like family."
            }
        ]
    }

