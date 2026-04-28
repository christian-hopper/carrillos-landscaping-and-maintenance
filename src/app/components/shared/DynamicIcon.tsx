// src/components/shared/DynamicIcon.tsx

import type { IconName } from "../../../data/business";
import { iconMap } from "../../../utils/iconMap";

interface DynamicIconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function DynamicIcon({ name, className, size = 20 }: DynamicIconProps) {
  const Icon = iconMap[name];
  return <Icon className={className} size={size} />;
}
