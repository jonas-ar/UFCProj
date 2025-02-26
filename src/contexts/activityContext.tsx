import React, { createContext, useState, ReactNode } from 'react';

export interface Activity {
    titulo: string;
    responsavel: string;
    data: string;
    descricao: string;
}

interface ActivityContextType {
    activities: Activity[];
    addActivity: (activity: Activity) => void;
    deleteActivity: (index: number) => void;
}

export const ActivityContext = createContext<ActivityContextType>({
    activities: [],
    addActivity: () => {},
    deleteActivity: () => {},
});

export const ActivityProvider = ({ children }: { children: ReactNode }) => {
    const [activities, setActivities] = useState<Activity[]>([]);

    const addActivity = (activity: Activity) => {
        setActivities((prevActivities) => [...prevActivities, activity]);
    };
    
    const deleteActivity = (index: number) => {
        setActivities((prevActivities) =>
            prevActivities.filter((_, i) => i !== index)
        );
    };

    return (
        <ActivityContext.Provider value={{ activities, addActivity, deleteActivity }}>
            {children}
        </ActivityContext.Provider>
    );
};
