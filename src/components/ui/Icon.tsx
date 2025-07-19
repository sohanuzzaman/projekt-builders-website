import { 
  ClipboardList, 
  Users, 
  Leaf, 
  Home, 
  Recycle, 
  Building, 
  Sparkles, 
  Handshake,
  PlayCircle,
  Lightbulb,
  ShoppingCart,
  FileText,
  HardHat,
  CheckCircle,
  Key,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const iconMap = {
  'clipboard-list': ClipboardList,
  'users': Users,
  'leaf': Leaf,
  'home': Home,
  'recycle': Recycle,
  'building': Building,
  'sparkles': Sparkles,
  'handshake': Handshake,
  'play-circle': PlayCircle,
  'lightbulb': Lightbulb,
  'drafting-compass': Lightbulb, // Using lightbulb as placeholder
  'shopping-cart': ShoppingCart,
  'file-text': FileText,
  'hard-hat': HardHat,
  'check-circle': CheckCircle,
  'key': Key,
  'menu': Menu,
  'x': X,
  'mail': Mail,
  'phone': Phone,
  'map-pin': MapPin,
  'arrow-right': ArrowRight,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName | string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className }: IconProps) {
  const IconComponent = iconMap[name as IconName];
  
  if (!IconComponent) {
    // Fallback to a default icon
    return <Sparkles size={size} className={className} />;
  }
  
  return <IconComponent size={size} className={className} />;
}