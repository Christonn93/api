import { Blog } from "../../models/blog.model";

export const sampleBlogs: Blog[] = [
 {
  id: "e6d7f8b3-3f67-4f99-b59a-dfa1abfbc7b5",
  userId: "c7e8b6b7-9f7d-409d-9e3a-3fcf5f7d134d",
  title: "Exploring the Future of Technology",
  content:
   "In this blog post, we dive deep into the rapidly advancing world of technology. From AI to quantum computing, the future is an exciting place. Let's explore the potential of these technologies and how they will change the way we live and work.",
  coverImage: "https://example.com/cover-images/future-tech.jpg",
  tags: ["Technology", "AI", "Quantum Computing", "Innovation"],
  likes: 128,
  comments: [
   {
    userId: "a1d4f6b9-2b74-4e9a-b73a-c96a935eb9fa",
    content: "Great article! I'm excited about AI's potential.",
    createdAt: new Date("2025-02-16T08:00:00Z"),
   },
   {
    userId: "b0c8d4e5-8c35-4a02-a39e-7a973c1b8c74",
    content: "I think quantum computing is still a bit far off, but this was an interesting read.",
    createdAt: new Date("2025-02-16T09:00:00Z"),
   },
  ],
  views: 2500,
  status: "published",
  featured: true,
  estimatedReadTime: 6,
  createdAt: new Date("2025-02-14T12:00:00Z"),
  updatedAt: new Date("2025-02-16T10:00:00Z"),
 },
 {
  id: "f84fd4b1-a7b9-40fc-82ac-8d618d993458",
  userId: "f2b90f93-79a7-4972-82c5-b74f01625e3f",
  title: "10 Tips for Staying Productive While Working from Home",
  content:
   "Remote work has become more common, and staying productive while working from home can be challenging. In this blog post, we will share 10 essential tips to boost productivity, maintain focus, and create a better work-life balance.",
  coverImage: "https://example.com/cover-images/productivity-tips.jpg",
  tags: ["Productivity", "Work From Home", "Remote Work", "Tips"],
  likes: 245,
  comments: [
   {
    userId: "d6c8a029-d64d-4be2-9a51-d5c407a74b6e",
    content: "I love these tips! I've been working from home for a while, and they really helped.",
    createdAt: new Date("2025-02-16T10:30:00Z"),
   },
  ],
  views: 1800,
  status: "published",
  featured: false,
  estimatedReadTime: 5,
  createdAt: new Date("2025-02-12T08:30:00Z"),
  updatedAt: new Date("2025-02-16T10:15:00Z"),
 },
 {
  id: "7cc6d07f-8c9e-4787-bb97-f4165d346fd4",
  userId: "f4e2b0a1-b96a-4c8b-b75c-d3125db3f77f",
  title: "The Impact of Social Media on Mental Health",
  content:
   "Social media platforms have a significant impact on mental health, both positively and negatively. In this post, we examine the effects of social media on mental health, including addiction, self-esteem, and the role of social comparison.",
  coverImage: "https://example.com/cover-images/social-media-mental-health.jpg",
  tags: ["Mental Health", "Social Media", "Wellness", "Self-Esteem"],
  likes: 320,
  comments: [
   {
    userId: "c9a0f497-5496-45c7-bb8e-c5999cdb3fc1",
    content: "This topic is so relevant. It's important to have conversations about mental health and social media.",
    createdAt: new Date("2025-02-16T11:00:00Z"),
   },
  ],
  views: 3600,
  status: "published",
  featured: true,
  estimatedReadTime: 7,
  createdAt: new Date("2025-02-10T09:00:00Z"),
  updatedAt: new Date("2025-02-16T11:30:00Z"),
 },
];
