import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type BlogPostCardProps = {
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
  category: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorImageUrl: string;
  authorAvatarFallback: string;
  href: string;
};

export function BlogPostCard({
  imageUrl,
  imageAlt,
  imageHint,
  category,
  title,
  excerpt,
  authorName,
  authorImageUrl,
  authorAvatarFallback,
  href,
}: BlogPostCardProps) {
  return (
    <article className="group">
      <Link href={href} className="block overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={800}
          height={600}
          className="w-full object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={imageHint}
        />
      </Link>
      <div className="mt-4">
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-semibold text-primary hover:underline">
            {category}
          </Link>
        </div>
        <h2 className="mt-2 text-2xl font-bold font-headline text-foreground">
          <Link href={href}>{title}</Link>
        </h2>
        <p className="mt-2 text-base text-foreground/80 leading-relaxed">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={authorImageUrl} alt={authorName} />
              <AvatarFallback>{authorAvatarFallback}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-foreground">{authorName}</span>
          </div>
          <Link href={href} className="flex items-center text-sm font-semibold text-primary hover:text-accent">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
