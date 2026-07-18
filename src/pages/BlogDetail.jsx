import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { blogsData } from '../data/blogsData';
import HeroSection from '../components/HeroSection';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
        <Link to="/blogs" className="text-[#0ea5e9] hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div>
      <HeroSection
        title={blog.title}
        subtitle="MSA Trading Insights & News"
      />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-[#1e3a8a] font-medium hover:text-[#0ea5e9] transition-colors mb-8">
          <ArrowLeft size={18} /> Back to all articles
        </Link>

        <article className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100">
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-6">
              <span className="flex items-center gap-2 bg-blue-50 text-[#1e3a8a] px-3 py-1 rounded-full font-medium">
                <Calendar size={16} />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <User size={16} className="text-[#0ea5e9]" />
                By {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-[#0ea5e9]" />
                5 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2c59] mb-8 leading-tight">
              {blog.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
                {blog.excerpt}
              </p>
              <p className="mb-6">
                {blog.content}
              </p>
              <p className="mb-6">
                Whether you are a startup looking to establish your presence or an established enterprise seeking to expand, understanding these dynamics is essential. Our team at MSA Trading provides expert guidance tailored to your specific needs, ensuring that you remain compliant with local regulations while maximizing your operational efficiency.
              </p>
              <div className="bg-sky-50 border-l-4 border-[#0ea5e9] p-6 rounded-r-xl mt-8">
                <h3 className="text-[#1e3a8a] font-bold text-lg mb-2">Ready to take the next step?</h3>
                <p className="text-gray-700 mb-0">Contact MSA Trading today for a free consultation on how we can help your business thrive in Qatar.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
