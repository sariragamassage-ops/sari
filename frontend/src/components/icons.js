import React from "react";
import {
  BadgeCheck,
  CalendarCheck,
  Clock,
  Flower2,
  HeartHandshake,
  ListChecks,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wind,
  Zap,
} from "lucide-react";

export const ICONS = {
  BadgeCheck,
  CalendarCheck,
  Clock,
  Flower2,
  HeartHandshake,
  ListChecks,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wind,
  Zap,
};

export const DynIcon = ({ name, className }) => {
  const Cmp = ICONS[name] || Sparkles;
  return <Cmp className={className} />;
};
