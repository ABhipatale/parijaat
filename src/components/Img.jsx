// Responsive WebP image from /public/images. `name` is the file name without extension.
export default function Img({ name, alt, small = false, priority = false, sizes, className = '', ...rest }) {
  const src = `/images/${name}${small ? '-sm' : ''}.webp`;
  return (
    <img
      src={src}
      srcSet={small ? undefined : `/images/${name}-sm.webp 640w, /images/${name}.webp 1600w`}
      sizes={small ? undefined : sizes ?? '(max-width: 768px) 100vw, 50vw'}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
      {...rest}
    />
  );
}
