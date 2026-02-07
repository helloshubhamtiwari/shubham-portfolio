/// <reference types="vite/client" />

// Image module declarations
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
declare module '*.webp';

// Environment variables type definitions
interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_PUBLIC_KEY: string;
    readonly DEV: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            instancedMesh: any
            capsuleGeometry: any
            sphereGeometry: any
            meshStandardMaterial: any
        }
    }
}
