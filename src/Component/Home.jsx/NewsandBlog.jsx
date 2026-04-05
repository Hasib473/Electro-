import React from 'react';

const NewsandBlog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'WHAT IS LOREM IPSUM?',
            date: '01/01/2026',
            readTime: '5 Min Read',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop',
            excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and s...'
        },
        {
            id: 2,
            title: 'WHAT IS LOREM IPSUM?',
            date: '01/01/2026',
            readTime: '5 Min Read',
            image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=200&fit=crop',
            excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and s...'
        },
        {
            id: 3,
            title: 'WHAT IS LOREM IPSUM?',
            date: '01/01/2026',
            readTime: '5 Min Read',
            image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=300&h=200&fit=crop',
            excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and s...'
        }
    ];

    const newsPosts = [
        {
            id: 1,
            title: 'WHAT IS LOREM IPSUM?',
            date: '01/01/2026',
            readTime: '5 Min Read',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
            excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and s...'
        },
        {
            id: 2,
            title: 'WHAT IS LOREM IPSUM?',
            date: '01/01/2026',
            readTime: '5 Min Read',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop',
            excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and s...'
        },
        {
            id: 3,
            title: 'WHAT IS LOREM IPSUM?',
            date: '01/01/2026',
            readTime: '5 Min Read',
            image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&h=200&fit=crop',
            excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and s...'
        }
    ];

    const BlogCard = ({ post }) => (
        <div className="flex gap-4 mb-6">
            <div className="flex-shrink-0">
                <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-48 h-32 object-cover"
                />
            </div>
            <div className="flex-1">
                <div className="text-xs text-gray-500 mb-1">
                    {post.date} | {post.readTime}
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2 uppercase">
                    {post.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-2 line-clamp-3">
                    {post.excerpt}
                </p>
                <button className="text-blue-600 text-xs font-semibold hover:text-blue-800 transition-colors">
                    Read More
                </button>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Latest Blogs Section */}
                    <div className="bg-white p-8 rounded-xl">
                        <h2 className="text-2xl font-bold text-gray-800 text-center uppercase mb-8">
                            Latest Blogs
                        </h2>
                        
                        <div className="space-y-6">
                            {blogPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <button className="px-8 rounded-xl py-3 border-2 border-blue-600 text-blue-600 font-semibold uppercase text-sm hover:bg-blue-600 hover:text-white transition-all duration-300">
                                See More
                            </button>
                        </div>
                    </div>

                    {/* Latest News Section */}
                    <div className="bg-white p-8 rounded-xl">
                        <h2 className="text-2xl font-bold text-gray-800 text-center uppercase mb-8">
                            Latest News
                        </h2>
                        
                        <div className="space-y-6">
                            {newsPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <button className="px-8 rounded-xl py-3 border-2 border-blue-600 text-blue-600 font-semibold uppercase text-sm hover:bg-blue-600 hover:text-white transition-all duration-300">
                                See More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsandBlog;