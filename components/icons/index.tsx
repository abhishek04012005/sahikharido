'use client';

import type { ElementType } from 'react';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SellIcon from '@mui/icons-material/Sell';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SearchIcon from '@mui/icons-material/Search';
import BalanceIcon from '@mui/icons-material/Balance';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PercentIcon from '@mui/icons-material/Percent';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StorefrontIcon from '@mui/icons-material/Storefront';

export {
  MenuIcon,
  CloseIcon,
  CheckIcon,
  StarIcon,
  FacebookIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon,
  MenuBookIcon,
  Inventory2Icon,
  SellIcon,
  VerifiedIcon,
  AccessTimeIcon,
  FitnessCenterIcon,
  AttachMoneyIcon,
  TrackChangesIcon,
  ShoppingCartIcon,
  AutoAwesomeIcon,
  SearchIcon,
  BalanceIcon,
  SmartphoneIcon,
  PercentIcon,
  ThumbUpIcon,
  StorefrontIcon,
};

const CATEGORY_ICON_MAP: Record<string, ElementType> = {
  kitchen: LocalFireDepartmentIcon,
  electronics: ComputerIcon,
  fitness: FitnessCenterIcon,
  fashion: WatchIcon,
};

const FEATURE_ICON_MAP: Record<string, ElementType> = {
  search: SearchIcon,
  balance: BalanceIcon,
  money: AttachMoneyIcon,
  smartphone: SmartphoneIcon,
  menuBook: MenuBookIcon,
  star: StarIcon,
  verified: VerifiedIcon,
  cart: ShoppingCartIcon,
  store: StorefrontIcon,
};

type IconBoxProps = SvgIconProps & {
  icon: ElementType;
  className?: string;
};

export function IconBox({ icon: Icon, className, sx, ...props }: IconBoxProps) {
  return (
    <span className={className} style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
      <Icon fontSize="inherit" sx={{ color: 'var(--color-primary)', ...sx }} {...props} />
    </span>
  );
}

export function CategoryIcon({
  category,
  ...props
}: { category: string } & SvgIconProps) {
  const Icon = CATEGORY_ICON_MAP[category] ?? StarIcon;
  return <Icon fontSize="small" sx={{ color: 'var(--color-primary)' }} {...props} />;
}

export function FeatureIcon({
  name,
  ...props
}: { name: string } & SvgIconProps) {
  const Icon = FEATURE_ICON_MAP[name] ?? StarIcon;
  return <Icon fontSize="medium" sx={{ color: 'var(--color-primary)' }} {...props} />;
}

export function StarRating({
  rating,
  max = 5,
  size = 'small',
}: {
  rating: number;
  max?: number;
  size?: SvgIconProps['fontSize'];
}) {
  const stars = [];
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const empty = max - full - (hasHalf ? 1 : 0);
  const starSx = { color: '#ffb400' };

  for (let i = 0; i < full; i++) {
    stars.push(<StarIcon key={`full-${i}`} fontSize={size} sx={starSx} />);
  }
  if (hasHalf) {
    stars.push(<StarHalfIcon key="half" fontSize={size} sx={starSx} />);
  }
  for (let i = 0; i < empty; i++) {
    stars.push(<StarBorderIcon key={`empty-${i}`} fontSize={size} sx={starSx} />);
  }

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, verticalAlign: 'middle' }}>
      {stars}
    </span>
  );
}
