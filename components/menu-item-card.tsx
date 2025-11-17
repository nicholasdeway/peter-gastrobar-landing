import { MenuItem } from '@/data/menu'

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="flex justify-between items-start gap-4 py-3 px-4 rounded-lg hover:bg-secondary/50 transition-colors">
      <div className="flex-1">
        <h4 className="font-medium text-foreground">{item.name}</h4>
        {item.description && (
          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
        )}
      </div>
      <div className="text-primary font-semibold whitespace-nowrap">
        R$ {item.price.toLocaleString('pt-BR')}
      </div>
    </div>
  )
}