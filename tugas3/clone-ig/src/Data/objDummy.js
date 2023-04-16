const DummyFeeds = [
    {
        id: 1,
        username: "z.aljabbar",
        pic_post: require("../../assets/img/posts.png"),
        prof_pic: require("../../assets/icons/icon-boy-1.png"),
        likes_count: "1.000"
    },
    {
        id: 2,
        username: "z_aljabbar",
        pic_post: require("../../assets/img/posts.png"),
        prof_pic: require("../../assets/icons/icon-boy-2.png"),
        likes_count: "1.967"
    },
    {
        id: 3,
        username: "aljabbar57",
        pic_post: require("../../assets/img/posts.png"),
        prof_pic: require("../../assets/icons/icon-boy-3.png"),
        likes_count: "1.890"
    }
]

const DummyStories = [
    {
        id: 1,
        username: "z.aljabbar",
        gender: "M",
        is_view: false,
        pic_profile: require("../../assets/icons/icon-boy-1.png")
    },
    {
        id: 2,
        username: "z_aljabbar",
        gender: "F",
        is_view: false,
        pic_profile: require("../../assets/icons/icon-boy-2.png")
    },
    {
        id: 3,
        username: "aljabbar57",
        gender: "M",
        is_view: true,
        pic_profile: require("../../assets/icons/icon-boy-3.png")
    }
]

const Users = [
    {
        id: 1,
        name: "Zaki",
        fullname: "Zaki Aljabbar",
        image: require("../../assets/icons/icon-boy-1.png"),
        isread: false,
    },
    {
        id: 2,
        name: "Adrian",
        fullname: "Adrian Adhari",
        image: require("../../assets/icons/icon-orang.png"),
        isread: false,
    },
    {
        id: 3,
        name: "Hana",
        fullname: "Hana Yulia Rahmah",
        image: require("../../assets/icons/icon-girl-1.png"),
        isread: false,
    },
    {
        id: 4,
        name: "Lukman",
        fullname: "Lukman Nurhakim",
        image: require("../../assets/icons/icon-boy-1.png"),
        isread: false,
    },
    {
        id: 5,
        name: "Cindy",
        fullname: "Cindy Kevina",
        image: require("../../assets/icons/icon-girl-2.png"),
        isread: false,
    },
    {
        id: 6,
        name: "Erdiana",
        fullname: "Erdiana Ragil Syawala",
        image: require("../../assets/icons/icon-girl-2.png"),
        isread: true,
    },
    {
        id: 7,
        name: "Fawas",
        fullname: "Mohamad Fawaz Tauhid Ridho",
        image: require("../../assets/icons/icon-boy-3.png"),
        isread: true,
    },
];

export { DummyFeeds, DummyStories, Users }