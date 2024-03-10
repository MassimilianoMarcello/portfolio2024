import projects from './projects/projects';
import aboutMe from './about_me/about';
import blockContent from '@/schemas/blog_schema/blockContent'
import category from '@/schemas/blog_schema/category'
import post from '@/schemas/blog_schema/post'
import author from '@/schemas/blog_schema/author'
import postContent from '@/schemas/blog_schema/postContent';

export const schemaTypes = [projects,post, author, category, blockContent,postContent,aboutMe]


