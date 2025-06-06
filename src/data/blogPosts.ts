import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Sustainable Farming Practices for the Modern Age",
    slug: "sustainable-farming-practices",
    excerpt: "Discover how modern sustainable farming techniques can increase productivity while reducing environmental impact.",
    content: `
    <article class="prose max-w-3xl mx-auto px-4 py-6">
  <header>
    <h2 class="text-3xl font-bold mb-4">The Evolution of Sustainable Farming</h2>
    <p class="text-lg text-gray-700">
      Modern agriculture stands at a crucial intersection of tradition and innovation. As we face increasing environmental challenges and growing food demand, sustainable farming practices have become more important than ever.
    </p>
  </header>

  <section class="mt-8">
    <h3 class="text-2xl font-semibold mb-2">Key Sustainable Practices</h3>
    <p class="text-gray-700 mb-2">Several key practices define modern sustainable farming:</p>
    <ul class="list-disc list-inside space-y-1 text-gray-800">
      <li>Crop rotation and diversification</li>
      <li>Integrated pest management</li>
      <li>Water conservation techniques</li>
      <li>Soil health management</li>
    </ul>
  </section>

  <section class="mt-8">
    <h3 class="text-2xl font-semibold mb-2">Benefits of Sustainable Farming</h3>
    <p class="text-gray-700 mb-2">Implementing sustainable practices offers numerous benefits:</p>
    <ul class="list-disc list-inside space-y-1 text-gray-800">
      <li>Reduced environmental impact</li>
      <li>Improved soil fertility</li>
      <li>Better water retention</li>
      <li>Increased biodiversity</li>
      <li>Enhanced crop resilience</li>
    </ul>
  </section>

  <section class="mt-8">
    <h2 class="text-3xl font-bold mb-4">Technology in Sustainable Agriculture</h2>
    <p class="text-gray-700">
      Modern technology plays a crucial role in sustainable farming. From precision agriculture to IoT sensors, these tools help farmers optimize resource use while maintaining high productivity.
    </p>
  </section>

  <section class="mt-8">
    <h3 class="text-2xl font-semibold mb-2">Future Perspectives</h3>
    <p class="text-gray-700">
      The future of sustainable farming looks promising, with new innovations emerging regularly. Continued research and development in this field will be crucial for meeting future food demands while preserving our environment.
    </p>
  </section>
</article>
    `,
    image: "https://images.pexels.com/photos/7299948/pexels-photo-7299948.jpeg",
    author: {
      name: "Dulanjalee",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    date: "May 15, 2025",
    readTime: "8 min read",
    category: "Sustainability",
    tags: ["Sustainable Farming", "Agriculture", "Environment", "Technology"]
  },
  {
    id: 2,
    title: "Optimizing Irrigation: Water Conservation in Agriculture",
    slug: "optimizing-irrigation-water-conservation",
    excerpt: "Learn about the latest technologies and methods for water conservation in agricultural irrigation systems.",
    content: `
      <h2>Modern Irrigation Technologies</h2>
      <p>Water conservation in agriculture has become increasingly critical as we face climate change and water scarcity. Modern irrigation technologies offer solutions to these challenges.</p>
      
      <h3>Smart Irrigation Systems</h3>
      <p>Smart irrigation systems use various technologies to optimize water usage:</p>
      <ul>
        <li>Soil moisture sensors</li>
        <li>Weather-based controllers</li>
        <li>Drip irrigation systems</li>
        <li>Precision sprinklers</li>
      </ul>
      
      <h3>Benefits of Water Conservation</h3>
      <p>Implementing water conservation measures provides multiple benefits:</p>
      <ul>
        <li>Reduced water waste</li>
        <li>Lower operational costs</li>
        <li>Improved crop health</li>
        <li>Environmental protection</li>
      </ul>
      
      <h2>Best Practices for Water Management</h2>
      <p>Effective water management requires a combination of technology and good practices. Regular system maintenance, proper scheduling, and monitoring are essential components of any water conservation strategy.</p>
      
      <h3>Future of Irrigation</h3>
      <p>As technology continues to advance, we can expect even more efficient irrigation solutions. Integration with AI and machine learning will further optimize water usage in agriculture.</p>
    `,
    image: "https://images.pexels.com/photos/27443421/pexels-photo-27443421/free-photo-of-sprinklers-watering-lawn-at-palace.jpeg",
    author: {
      name: "T Lakshan",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    date: "April 28, 2025",
    readTime: "6 min read",
    category: "Water Management",
    tags: ["Irrigation", "Water Conservation", "Technology", "Agriculture"]
  }
  // Add more blog posts as needed
];