"use client"

import { Badge } from "@/components/ui/badge"
import { Plus, TrendingUp, TrendingDown } from "lucide-react"

interface Category {
  id: string
  name: string
  count: number
  change: number
  color: string
  description: string
}

const categories: Category[] = [
  {
    id: "1",
    name: "Technology",
    count: 156,
    change: 12.5,
    color: "bg-chart-1/20 text-chart-1 dark:bg-chart-1/30 dark:text-chart-1/80",
    description: "Tech news & tutorials",
  },
  {
    id: "2",
    name: "Business",
    count: 142,
    change: 8.3,
    color: "bg-chart-2/20 text-chart-2 dark:bg-chart-2/30 dark:text-chart-2/80",
    description: "Business insights",
  },
  {
    id: "3",
    name: "Health",
    count: 98,
    change: -2.1,
    color: "bg-destructive/20 text-destructive dark:bg-destructive/30 dark:text-destructive/80",
    description: "Health & wellness",
  },
  {
    id: "4",
    name: "Sports",
    count: 87,
    change: 15.7,
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    description: "Sports coverage",
  },
  {
    id: "5",
    name: "Entertainment",
    count: 76,
    change: 5.2,
    color: "bg-chart-4/20 text-chart-4 dark:bg-chart-4/30 dark:text-chart-4/80",
    description: "Entertainment news",
  },
  {
    id: "6",
    name: "Politics",
    count: 65,
    change: -8.4,
    color: "bg-muted text-muted-foreground dark:bg-muted/30 dark:text-muted-foreground/80",
    description: "Political analysis",
  },
]

export default function ContentCategories() {
  return (
    <div className="bg-card dark:bg-card rounded-xl p-6 border border-border dark:border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Content Categories</h3>
        <button className="p-2 hover:bg-secondary dark:hover:bg-secondary rounded-lg transition-colors">
          <Plus className="h-4 w-4 text-muted-foreground dark:text-muted-foreground" />
        </button>
      </div>

      <div className="space-y-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between p-3 hover:bg-secondary dark:hover:bg-secondary/50 rounded-lg transition-colors group"
          >
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <Badge className={`${category.color} border-0 flex-shrink-0`}>{category.name}</Badge>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground truncate">{category.description}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{category.count}</p>
                <div className="flex items-center justify-end">
                  {category.change > 0 ? (
                    <TrendingUp className="h-3 w-3 text-emerald-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive mr-1" />
                  )}
                  <span className={`text-xs ${category.change > 0 ? "text-emerald-600" : "text-destructive"}`}>
                    {category.change > 0 ? "+" : ""}
                    {category.change}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border dark:border-border">
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Total Articles</span>
          <span className="font-medium text-foreground">{categories.reduce((sum, cat) => sum + cat.count, 0)}</span>
        </div>
      </div>
    </div>
  )
}
