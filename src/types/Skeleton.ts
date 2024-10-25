export type SkeletonVariant = 'rectangular' | 'circular' | 'text';

export interface SkeletonProps {
    className?: string;
    height?: number | string;
    variant?: SkeletonVariant;
    width?: number | string;
}