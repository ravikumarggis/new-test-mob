import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the emerging trends and technologies that are shaping the future of web development, from AI integration to progressive web apps.',
      author: 'Sarah Johnson',
      date: 'January 15, 2024',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Mobile App Design Best Practices',
      excerpt: 'Learn essential design principles and guidelines for creating intuitive and engaging mobile applications that users love.',
      author: 'Michael Chen',
      date: 'January 12, 2024',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'SEO Strategies That Actually Work',
      excerpt: 'Discover proven SEO techniques to boost your website rankings and drive organic traffic to your business.',
      author: 'Emily Rodriguez',
      date: 'January 10, 2024',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Understanding React Hooks in Depth',
      excerpt: 'A comprehensive guide to React Hooks and how they revolutionize state management in functional components.',
      author: 'David Kim',
      date: 'January 8, 2024',
      category: 'React',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'Building Scalable Backend APIs',
      excerpt: 'Best practices for designing and implementing robust, scalable backend APIs that can handle growing demands.',
      author: 'Alex Thompson',
      date: 'January 5, 2024',
      category: 'Backend',
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'UI/UX Trends to Watch This Year',
      excerpt: 'Stay ahead of the curve with these cutting-edge UI/UX design trends that are transforming digital experiences.',
      author: 'Jessica Lee',
      date: 'January 3, 2024',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'SEO', 'React', 'Backend', 'Design'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-20 h-20 mx-auto mb-6 animate-bounce" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-green-100">
              Insights, tutorials, and latest trends in web and mobile development
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles and insights delivered straight to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 outline-none"
            />
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
