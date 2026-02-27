import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAboutContent(): Promise<{
        title: string;
        name: string;
        summary: string;
    }>;
    getCallerUserProfile(): Promise<{
        name: string;
    } | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCertifications(): Promise<Array<string>>;
    getContactInfo(): Promise<{
        linkedin: string;
        email: string;
        location: string;
    }>;
    getEducation(): Promise<{
        description: string;
        degree: string;
        years: string;
    }>;
    getExperience(): Promise<Array<{
        period: string;
        description: string;
        company: string;
        position: string;
    }>>;
    getProjectDetails(projectId: string): Promise<{
        id: string;
        title: string;
        role: string;
        description: string;
        videoUrl: string;
    } | null>;
    getProjectVideos(): Promise<Array<[string, string]>>;
    getProjects(): Promise<Array<[string, string]>>;
    getSkills(): Promise<Array<string>>;
    getUserProfile(user: Principal): Promise<{
        name: string;
    } | null>;
    initializeAccessControl(): Promise<void>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: {
        name: string;
    }): Promise<void>;
}
