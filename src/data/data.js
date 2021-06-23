import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

export const servicesData = [
    {
        id: 1,
        title: 'Ducted air conditioning',
        price: 80,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat recusandae eligendi ut error eos illum, debitis rem ipsa labore adipisci.',
        image: '/images/services/ducted_air.jpg',
    },
    {
        id: 2,
        title: 'Split system conditioning',
        price: 60,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat recusandae eligendi ut error eos illum, debitis rem ipsa labore adipisci.',
        image: '/images/services/split_system.jpg',
    },
    {
        id: 3,
        title: 'Services and Repairs',
        price: 93,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat recusandae eligendi ut error eos illum, debitis rem ipsa labore adipisci.',
        image: '/images/services/repairs.jpg',
    },
];

export const benefitsData = [
    {
        id: 1,
        description:
            'Increase the officiency of your air-conditioner by slashing your electricity bills.',
        icon: '/images/benefits/electricity.svg',
    },
    {
        id: 2,
        description:
            'Improves air quality by removing harmful germs, mould and bacteria',
        icon: '/images/benefits/bacteria.svg',
    },
    {
        id: 3,
        description:
            'Comfort, particularly in summer as we live in a hot climate.',
        icon: '/images/benefits/climate.svg',
    },
    {
        id: 4,
        description:
            'Heating and cooling performance is increased by up to 4℃.',
        icon: '/images/benefits/heating.svg',
    },
];

export const reviewsData = [
    {
        id: 1,
        name: 'Rakib Hossain',
        title: 'Digital marketing',
        image: '/images/reviews/rakib.jpg',
        reviewValue: 3,
        reviewDocument:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima fuga hic, vitae corporis necessitatibus placeat',
    },
    {
        id: 2,
        name: 'Ashiq Hossain',
        title: 'Android developer',
        image: '/images/reviews/ashiq.jpg',
        reviewValue: 5,
        reviewDocument:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima fuga hic, vitae corporis necessitatibus placeat',
    },
    {
        id: 3,
        name: 'Rohan Hossain',
        title: 'Game developer',
        image: '/images/reviews/rohan.jpg',
        reviewValue: 4,
        reviewDocument:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima fuga hic, vitae corporis necessitatibus placeat',
    },
];

// Navbar & Footer Items
export const quickLink = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'About us',
        url: '/',
    },
    {
        id: 3,
        title: 'Services',
        url: '/',
    },
    {
        id: 4,
        title: 'Blog',
        url: '/',
    },
    {
        id: 5,
        title: 'Contact us',
        url: '/',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/',
    },
];

// Dashboard
export const adminDashboard = [
    {
        id: 1,
        title: 'Order List',
        url: '/orderList',
        Icon: FormatListNumberedIcon,
    },
    {
        id: 2,
        title: 'Add Service',
        url: '/addService',
        Icon: AddToPhotosIcon,
    },
    {
        id: 3,
        title: 'Make Admin',
        url: '/makeAdmin',
        Icon: PersonAddIcon,
    },
    {
        id: 4,
        title: 'Manage Service',
        url: '/manageServices',
        Icon: InsertChartIcon,
    },
];

export const userDashboard = [
    {
        id: 1,
        title: 'Booking List',
        url: '/dashboard/bookingList',
        Icon: FormatListNumberedIcon,
    },
    {
        id: 2,
        title: 'Review',
        url: '/dashboard/review',
        Icon: RateReviewIcon,
    },
];

// Footer Items
export const services = [
    {
        id: 1,
        title: 'Ducted Air Conditioning',
        url: '/ductedAir',
    },
    {
        id: 2,
        title: 'Split System',
        url: '/splitSystem',
    },
    {
        id: 3,
        title: 'Services & Repairs',
        url: '/repairs',
    },
    {
        id: 4,
        title: 'Benefits of Cleaning',
        url: '/benefits',
    },
];

export const information = [
    {
        id: 1,
        title: 'Privacy',
        url: '/privacy',
    },
    {
        id: 2,
        title: 'Terms of Services',
        url: '/termsServices',
    },
    {
        id: 3,
        title: 'Terms of USE',
        url: '/termsUse',
    },
    {
        id: 4,
        title: 'Help',
        url: '/help',
    },
    {
        id: 5,
        title: 'Legal',
        url: '/legal',
    },
];

// Social Links
export const socialLink = [
    {
        id: 1,
        url: 'https://www.facebook.com/hossainrabbibd/',
        Icon: FacebookIcon,
    },
    {
        id: 2,
        url: 'https://www.linkedin.com/in/hossainrabbi/',
        Icon: LinkedInIcon,
    },
    {
        id: 3,
        url: 'https://www.instagram.com/hossainrabbibd/',
        Icon: InstagramIcon,
    },
];
