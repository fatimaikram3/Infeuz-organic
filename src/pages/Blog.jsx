import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'The Ultimate Morning Skincare Routine for Glowing Skin',
            excerpt: 'Discover the secrets to a radiant morning routine that lasts all day...',
            category: 'Routines',
            date: 'Feb 20, 2026',
            author: 'Dr. Elena Rossi',
            img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80'
        },
        {
            id: 2,
            title: 'Why Vitamin C is a Must-Have in Your Skincare Arsenal',
            excerpt: 'Everything you need to know about the most powerful antioxidant in skincare...',
            category: 'Education',
            date: 'Feb 15, 2026',
            author: 'Team Infeuz',
            img: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80'
        },
        {
            id: 3,
            title: '5 Myths About Natural Skincare Debunked',
            excerpt: 'We separate fact from fiction when it comes to clean, natural beauty...',
            category: 'Education',
            date: 'Feb 10, 2026',
            author: 'Dr. Elena Rossi',
            img: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&q=80'
        }
    ];

    return (
        <div className="blog-page container py-40">
            <div className="blog-header text-center mb-20">
                <h1 className="luxury-font text-5xl mb-4">Skincare Journal</h1>
                <p style={{ color: 'var(--muted-text)' }}>Expert tips, routines, and skincare education.</p>
            </div>

            <div className="blog-grid grid grid-cols-3 gap-10">
                {posts.map(post => (
                    <article key={post.id} className="blog-post">
                        <div className="post-img mb-6">
                            <img src={post.img} alt={post.title} />
                            <span className="post-cat">{post.category}</span>
                        </div>
                        <div className="post-meta flex gap-4 text-xs mb-4" style={{ color: 'var(--muted-text)' }}>
                            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                            <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                        </div>
                        <h3 className="luxury-font text-2xl mb-4 leading-tight">{post.title}</h3>
                        <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--muted-text)' }}>{post.excerpt}</p>
                        <a href={`/blog/${post.id}`} className="read-more flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
                            Read More <ArrowRight size={16} />
                        </a>
                    </article>
                ))}
            </div>

            {/* Newsletter Section */}
            <section className="blog-newsletter mt-32 bg-soft-pink rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 hidden md:block">
                        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80" alt="Skincare bottle" className="w-full h-full object-cover" style={{ height: '400px' }} />
                    </div>
                    <div className="p-12 md:w-1/3 text-center">
                        <h2 className="luxury-font text-4xl mb-4">The Glow Report</h2>
                        <p className="mb-8" style={{ color: 'var(--dark-text)' }}>Get the latest skincare science and exclusive offers delivered to your inbox.</p>
                        <div className="flex flex-col gap-4">
                            <input type="email" placeholder="Enter your email" className="p-4 outline-none rounded border border-pink-200" />
                            <button className="btn-primary">Subscribe</button>
                        </div>
                    </div>
                    <div className="md:w-1/3 hidden md:block">
                        <img src="/src/assets/hero-product.jpg" alt="Infeuz Organic Skin Care" className="w-full h-full object-cover" style={{ height: '400px' }} />
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .flex-col { display: flex; flex-direction: column; }
        @media (min-width: 768px) { .md\\:flex-row { flex-direction: row; } .md\\:w-1\/3 { width: 33.333333%; } .md\\:block { display: block; } }
        .p-12 { padding: 3rem; }
        .gap-4 { gap: 1rem; }
        .border-pink-200 { border-color: #F9D1D1; }
        .object-cover { object-fit: cover; }
        .overflow-hidden { overflow: hidden; }
      `}} />

            <style dangerouslySetInnerHTML={{
                __html: `
        .post-img {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
          border-radius: 4px;
        }
        .post-img img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition); }
        .blog-post:hover img { transform: scale(1.05); }
        
        .post-cat {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--surface);
          color: var(--dark-text);
          padding: 4px 12px;
          font-size: 0.7rem;
          text-transform: uppercase;
          font-weight: 500;
          border-radius: 20px;
        }

        .read-more {
          border-bottom: 1px solid transparent;
          width: fit-content;
        }
        .read-more:hover {
          border-bottom-color: var(--dark-text);
        }

        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}} />
        </div>
    );
};

export default Blog;
