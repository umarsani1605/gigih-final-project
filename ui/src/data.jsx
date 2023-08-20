const videos = [
  {
    title: "Samsung Galaxy Unpacked",
    url: "https://www.youtube.com/shorts/GiMDQuT9_oU",
    thumbnailUrl: "https://i.ytimg.com/vi/GiMDQuT9_oU/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDKvPpPnDeom5KBGL2eGLmLZ_gPAw",
    viewerCount: 123,
    shop: {
      name: "Samsung Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "John Doe",
        comment: "Great video!",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "Love the new Samsung devices!",
        timestamp: "28072023",
      },
      {
        userName: "Michael Smith",
        comment: "Wow, impressive presentation!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Introducing Samsung's Latest Innovation",
    url: "https://www.youtube.com/shorts/9sb4t44V3pk",
    thumbnailUrl: "https://i.ytimg.com/vi/9sb4t44V3pk/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDwvB1yTIAYXApEoDDKulaBLSdrdQ",
    viewerCount: 456,
    shop: {
      name: "Samsung Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Emily Johnson",
        comment: "When will it be available?",
        timestamp: "28072023",
      },
      {
        userName: "Robert Brown",
        comment: "The design is sleek and modern!",
        timestamp: "28072023",
      },
      {
        userName: "Jennifer Lee",
        comment: "I can't wait to get my hands on it!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Apple's Special Event",
    url: "https://www.youtube.com/shorts/Pnhc32OVE48",
    thumbnailUrl: "https://i.ytimg.com/vi/Pnhc32OVE48/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCHrl266b4yMdir0CHeXbcAxJNjjw",
    viewerCount: 789,
    shop: {
      name: "Apple Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "William Wilson",
        comment: "The new iPhone looks amazing!",
        timestamp: "28072023",
      },
      {
        userName: "Jessica Martinez",
        comment: "I'm loving the new colors!",
        timestamp: "28072023",
      },
      {
        userName: "David Anderson",
        comment: "Great job, Apple!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Unveiling the Latest Apple Product",
    url: "https://www.youtube.com/shorts/yeOd-7vvZus",
    thumbnailUrl: "https://i.ytimg.com/vi/yeOd-7vvZus/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAjwCUdRNeRsbcHbzzxQnpXk9XOpg",
    viewerCount: 321,
    shop: {
      name: "Apple Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Sarah Davis",
        comment: "This is revolutionary!",
        timestamp: "28072023",
      },
      {
        userName: "John Doe",
        comment: "When will it be released?",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "I need to upgrade my phone now!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Poco's New Flagship Device",
    url: "https://www.youtube.com/shorts/77Z7oA_E6H8",
    thumbnailUrl: "https://i.ytimg.com/vi/77Z7oA_E6H8/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAkeS9FhppjD4FOa5Glq4662AMcjQ",
    viewerCount: 654,
    shop: {
      name: "Poco Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "William Wilson",
        comment: "Poco never disappoints!",
        timestamp: "28072023",
      },
      {
        userName: "Jessica Martinez",
        comment: "The price is tempting!",
        timestamp: "28072023",
      },
      {
        userName: "David Anderson",
        comment: "I wonder if it's water-resistant?",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Oppo's Latest Smartphone Launch",
    url: "https://www.youtube.com/shorts/6Xh4gxwRKhQ",
    thumbnailUrl: "https://i.ytimg.com/vi/6Xh4gxwRKhQ/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCMBI3WknWqs_5AQjjLBUcsm5Ng0Q",
    viewerCount: 987,
    shop: {
      name: "Oppo Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Sarah Davis",
        comment: "The design is sleek!",
        timestamp: "28072023",
      },
      {
        userName: "John Doe",
        comment: "I hope it has a good camera!",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "Oppo never fails to innovate!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Samsung Galaxy Unpacked",
    url: "https://www.youtube.com/shorts/GiMDQuT9_oU",
    thumbnailUrl: "https://i.ytimg.com/vi/GiMDQuT9_oU/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDKvPpPnDeom5KBGL2eGLmLZ_gPAw",
    viewerCount: 123,
    shop: {
      name: "Samsung Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "John Doe",
        comment: "Great video!",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "Love the new Samsung devices!",
        timestamp: "28072023",
      },
      {
        userName: "Michael Smith",
        comment: "Wow, impressive presentation!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Introducing Samsung's Latest Innovation",
    url: "https://www.youtube.com/shorts/9sb4t44V3pk",
    thumbnailUrl: "https://i.ytimg.com/vi/9sb4t44V3pk/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDwvB1yTIAYXApEoDDKulaBLSdrdQ",
    viewerCount: 456,
    shop: {
      name: "Samsung Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Emily Johnson",
        comment: "When will it be available?",
        timestamp: "28072023",
      },
      {
        userName: "Robert Brown",
        comment: "The design is sleek and modern!",
        timestamp: "28072023",
      },
      {
        userName: "Jennifer Lee",
        comment: "I can't wait to get my hands on it!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Apple's Special Event",
    url: "https://www.youtube.com/shorts/Pnhc32OVE48",
    thumbnailUrl: "https://i.ytimg.com/vi/Pnhc32OVE48/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCHrl266b4yMdir0CHeXbcAxJNjjw",
    viewerCount: 789,
    shop: {
      name: "Apple Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "William Wilson",
        comment: "The new iPhone looks amazing!",
        timestamp: "28072023",
      },
      {
        userName: "Jessica Martinez",
        comment: "I'm loving the new colors!",
        timestamp: "28072023",
      },
      {
        userName: "David Anderson",
        comment: "Great job, Apple!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Unveiling the Latest Apple Product",
    url: "https://www.youtube.com/shorts/yeOd-7vvZus",
    thumbnailUrl: "https://i.ytimg.com/vi/yeOd-7vvZus/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAjwCUdRNeRsbcHbzzxQnpXk9XOpg",
    viewerCount: 321,
    shop: {
      name: "Apple Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Sarah Davis",
        comment: "This is revolutionary!",
        timestamp: "28072023",
      },
      {
        userName: "John Doe",
        comment: "When will it be released?",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "I need to upgrade my phone now!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Poco's New Flagship Device",
    url: "https://www.youtube.com/shorts/77Z7oA_E6H8",
    thumbnailUrl: "https://i.ytimg.com/vi/77Z7oA_E6H8/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAkeS9FhppjD4FOa5Glq4662AMcjQ",
    viewerCount: 654,
    shop: {
      name: "Poco Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "William Wilson",
        comment: "Poco never disappoints!",
        timestamp: "28072023",
      },
      {
        userName: "Jessica Martinez",
        comment: "The price is tempting!",
        timestamp: "28072023",
      },
      {
        userName: "David Anderson",
        comment: "I wonder if it's water-resistant?",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Oppo's Latest Smartphone Launch",
    url: "https://www.youtube.com/shorts/6Xh4gxwRKhQ",
    thumbnailUrl: "https://i.ytimg.com/vi/6Xh4gxwRKhQ/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCMBI3WknWqs_5AQjjLBUcsm5Ng0Q",
    viewerCount: 987,
    shop: {
      name: "Oppo Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Sarah Davis",
        comment: "The design is sleek!",
        timestamp: "28072023",
      },
      {
        userName: "John Doe",
        comment: "I hope it has a good camera!",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "Oppo never fails to innovate!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Samsung Galaxy Unpacked",
    url: "https://www.youtube.com/shorts/GiMDQuT9_oU",
    thumbnailUrl: "https://i.ytimg.com/vi/GiMDQuT9_oU/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDKvPpPnDeom5KBGL2eGLmLZ_gPAw",
    viewerCount: 123,
    shop: {
      name: "Samsung Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "John Doe",
        comment: "Great video!",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "Love the new Samsung devices!",
        timestamp: "28072023",
      },
      {
        userName: "Michael Smith",
        comment: "Wow, impressive presentation!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Introducing Samsung's Latest Innovation",
    url: "https://www.youtube.com/shorts/9sb4t44V3pk",
    thumbnailUrl: "https://i.ytimg.com/vi/9sb4t44V3pk/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDwvB1yTIAYXApEoDDKulaBLSdrdQ",
    viewerCount: 456,
    shop: {
      name: "Samsung Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Emily Johnson",
        comment: "When will it be available?",
        timestamp: "28072023",
      },
      {
        userName: "Robert Brown",
        comment: "The design is sleek and modern!",
        timestamp: "28072023",
      },
      {
        userName: "Jennifer Lee",
        comment: "I can't wait to get my hands on it!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Apple's Special Event",
    url: "https://www.youtube.com/shorts/Pnhc32OVE48",
    thumbnailUrl: "https://i.ytimg.com/vi/Pnhc32OVE48/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCHrl266b4yMdir0CHeXbcAxJNjjw",
    viewerCount: 789,
    shop: {
      name: "Apple Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "William Wilson",
        comment: "The new iPhone looks amazing!",
        timestamp: "28072023",
      },
      {
        userName: "Jessica Martinez",
        comment: "I'm loving the new colors!",
        timestamp: "28072023",
      },
      {
        userName: "David Anderson",
        comment: "Great job, Apple!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Unveiling the Latest Apple Product",
    url: "https://www.youtube.com/shorts/yeOd-7vvZus",
    thumbnailUrl: "https://i.ytimg.com/vi/yeOd-7vvZus/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAjwCUdRNeRsbcHbzzxQnpXk9XOpg",
    viewerCount: 321,
    shop: {
      name: "Apple Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Sarah Davis",
        comment: "This is revolutionary!",
        timestamp: "28072023",
      },
      {
        userName: "John Doe",
        comment: "When will it be released?",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "I need to upgrade my phone now!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Poco's New Flagship Device",
    url: "https://www.youtube.com/shorts/77Z7oA_E6H8",
    thumbnailUrl: "https://i.ytimg.com/vi/77Z7oA_E6H8/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAkeS9FhppjD4FOa5Glq4662AMcjQ",
    viewerCount: 654,
    shop: {
      name: "Poco Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "William Wilson",
        comment: "Poco never disappoints!",
        timestamp: "28072023",
      },
      {
        userName: "Jessica Martinez",
        comment: "The price is tempting!",
        timestamp: "28072023",
      },
      {
        userName: "David Anderson",
        comment: "I wonder if it's water-resistant?",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Oppo's Latest Smartphone Launch",
    url: "https://www.youtube.com/shorts/6Xh4gxwRKhQ",
    thumbnailUrl: "https://i.ytimg.com/vi/6Xh4gxwRKhQ/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCMBI3WknWqs_5AQjjLBUcsm5Ng0Q",
    viewerCount: 987,
    shop: {
      name: "Oppo Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Sarah Davis",
        comment: "The design is sleek!",
        timestamp: "28072023",
      },
      {
        userName: "John Doe",
        comment: "I hope it has a good camera!",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "Oppo never fails to innovate!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Samsung Galaxy Unpacked",
    url: "https://www.youtube.com/shorts/GiMDQuT9_oU",
    thumbnailUrl: "https://i.ytimg.com/vi/GiMDQuT9_oU/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDKvPpPnDeom5KBGL2eGLmLZ_gPAw",
    viewerCount: 123,
    shop: {
      name: "Samsung Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "John Doe",
        comment: "Great video!",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "Love the new Samsung devices!",
        timestamp: "28072023",
      },
      {
        userName: "Michael Smith",
        comment: "Wow, impressive presentation!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Introducing Samsung's Latest Innovation",
    url: "https://www.youtube.com/shorts/9sb4t44V3pk",
    thumbnailUrl: "https://i.ytimg.com/vi/9sb4t44V3pk/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDwvB1yTIAYXApEoDDKulaBLSdrdQ",
    viewerCount: 456,
    shop: {
      name: "Samsung Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Emily Johnson",
        comment: "When will it be available?",
        timestamp: "28072023",
      },
      {
        userName: "Robert Brown",
        comment: "The design is sleek and modern!",
        timestamp: "28072023",
      },
      {
        userName: "Jennifer Lee",
        comment: "I can't wait to get my hands on it!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Apple's Special Event",
    url: "https://www.youtube.com/shorts/Pnhc32OVE48",
    thumbnailUrl: "https://i.ytimg.com/vi/Pnhc32OVE48/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCHrl266b4yMdir0CHeXbcAxJNjjw",
    viewerCount: 789,
    shop: {
      name: "Apple Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "William Wilson",
        comment: "The new iPhone looks amazing!",
        timestamp: "28072023",
      },
      {
        userName: "Jessica Martinez",
        comment: "I'm loving the new colors!",
        timestamp: "28072023",
      },
      {
        userName: "David Anderson",
        comment: "Great job, Apple!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Unveiling the Latest Apple Product",
    url: "https://www.youtube.com/shorts/yeOd-7vvZus",
    thumbnailUrl: "https://i.ytimg.com/vi/yeOd-7vvZus/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAjwCUdRNeRsbcHbzzxQnpXk9XOpg",
    viewerCount: 321,
    shop: {
      name: "Apple Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Sarah Davis",
        comment: "This is revolutionary!",
        timestamp: "28072023",
      },
      {
        userName: "John Doe",
        comment: "When will it be released?",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "I need to upgrade my phone now!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Poco's New Flagship Device",
    url: "https://www.youtube.com/shorts/77Z7oA_E6H8",
    thumbnailUrl: "https://i.ytimg.com/vi/77Z7oA_E6H8/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAkeS9FhppjD4FOa5Glq4662AMcjQ",
    viewerCount: 654,
    shop: {
      name: "Poco Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "William Wilson",
        comment: "Poco never disappoints!",
        timestamp: "28072023",
      },
      {
        userName: "Jessica Martinez",
        comment: "The price is tempting!",
        timestamp: "28072023",
      },
      {
        userName: "David Anderson",
        comment: "I wonder if it's water-resistant?",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    title: "Oppo's Latest Smartphone Launch",
    url: "https://www.youtube.com/shorts/6Xh4gxwRKhQ",
    thumbnailUrl: "https://i.ytimg.com/vi/6Xh4gxwRKhQ/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCMBI3WknWqs_5AQjjLBUcsm5Ng0Q",
    viewerCount: 987,
    shop: {
      name: "Oppo Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Sarah Davis",
        comment: "The design is sleek!",
        timestamp: "28072023",
      },
      {
        userName: "John Doe",
        comment: "I hope it has a good camera!",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "Oppo never fails to innovate!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
];


export default videos