import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogsData } from '../data/blogsData';

const Blogs = () => {
  return (
    <div>
      <HeroSection 
        title="Our Blog" 
        subtitle="Insights, news, and updates from our industry experts in Qatar."
      />
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#0f2c59] mb-4">Latest Insights & News</h2>
          <p className="text-gray-600 text-lg">Stay updated with the latest trends and advice for running a successful business in Qatar.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((post) => (
            <Link to={`/blogs/${post.id}`} key={post.id} className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className="h-56 w-full overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-semibold text-[#1e3a8a] flex items-center gap-2">
                  <Calendar size={14} className="text-[#009b4d]" />
                  {post.date}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#0f2c59] mb-3 group-hover:text-[#009b4d] transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-6 flex-1 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center text-[#1e3a8a] font-bold group-hover:text-[#009b4d] transition-colors mt-auto">
                  Read Article <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
