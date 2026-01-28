
// Fix: Added React import to resolve "Cannot find namespace 'React'" errors when using React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

export interface ValueProp {
  title: string;
  icon: React.ReactNode;
}

export interface SectorItem {
  name: string;
  icon: React.ReactNode;
}
