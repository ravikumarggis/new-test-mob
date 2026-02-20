import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, BookmarkPlus } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();

  const blogPost = {
    id: 1,
    title: 'The Future of Web Development in 2024',
    content: `
      <p>Web development is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with websites and applications.</p>

      <h2>Artificial Intelligence Integration</h2>
      <p>AI is no longer just a buzzword—it's becoming an integral part of web development. From chatbots to personalized user experiences, AI is transforming how websites interact with users. Machine learning algorithms can now predict user behavior, optimize content delivery, and even generate code.</p>

      <h2>Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native applications. They offer offline functionality, push notifications, and app-like experiences while maintaining the accessibility of web applications. Major companies are increasingly adopting PWAs to provide better user experiences across devices.</p>

      <h2>WebAssembly Revolution</h2>
      <p>WebAssembly is enabling developers to run high-performance applications in browsers. This technology allows languages like C++, Rust, and Go to compile to web-compatible code, opening new possibilities for complex applications like video editing, 3D modeling, and gaming directly in the browser.</p>

      <h2>Serverless Architecture</h2>
      <p>Serverless computing is simplifying backend development and reducing operational costs. Developers can focus on writing code without worrying about server management, scaling, or infrastructure maintenance. This trend is making it easier for startups and small teams to build and deploy sophisticated applications.</p>

      <h2>Enhanced Security Measures</h2>
      <p>With increasing cyber threats, security is more critical than ever. Modern web development emphasizes security-first approaches, including zero-trust architecture, enhanced authentication methods, and regular security audits.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. Staying updated with these trends and continuously learning new technologies will be crucial for developers who want to remain competitive in this rapidly evolving field.</p>
    `,
    author: 'Sarah Johnson',
    date: 'January 15, 2024',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '5 min read',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <section className="relative h-96 bg-gradient-to-r from-[#8C6CFE] to-purple-600">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-white mb-6 hover:text-blue-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
            <div className="max-w-4xl">
              <span className="bg-[#8C6CFE] text-white px-4 py-2 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                {blogPost.title}
              </h1>
              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{blogPost.date}</span>
                </div>
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 -mt-20 relative z-10">
              <div className="flex items-center justify-end space-x-4 mb-8 pb-8 border-b">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#8C6CFE] transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#8C6CFE] transition-colors">
                  <BookmarkPlus className="w-5 h-5" />
                  <span>Save</span>
                </button>
              </div>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  color: '#374151',
                  lineHeight: '1.75',
                }}
              />

              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {blogPost.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{blogPost.author}</h3>
                    <p className="text-gray-600">Senior Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Link
                key={i}
                to={`/blog/${i + 1}`}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-400"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Related Article Title {i}
                  </h3>
                  <p className="text-gray-600 text-sm">Click to read more about this topic...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
