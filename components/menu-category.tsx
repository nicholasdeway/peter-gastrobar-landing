import { MenuCategory } from '@/data/menu'
import MenuItemCard from './menu-item-card'

interface MenuCategoryProps {
  category: MenuCategory
}

export default function MenuCategoryComponent({ category }: MenuCategoryProps) {
  return (
    <section id={category.id} className="py-8 scroll-mt-24">
      <h2 className="text-3xl font-display font-bold text-foreground mb-6">{category.name}</h2>
      <div className="bg-card/50 rounded-lg overflow-hidden">
        {category.items.map((item, index) => (
          <div
            key={`${category.id}-${index}`}
            className={index !== category.items.length - 1 ? 'border-b border-border' : ''}
          >
            <MenuItemCard item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}