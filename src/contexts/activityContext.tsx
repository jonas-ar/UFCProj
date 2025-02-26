import React, { createContext, useState, ReactNode } from 'react';

interface Activity {
    titulo: string;
    responsavel: string;
    data: string;
    descricao: string;
}

interface ActivityContextType {
    activities: Activity[];
    addActivity: (activity: Activity) => void;
}

export const ActivityContext = createContext<ActivityContextType>({
    activities: [],
    addActivity: () => {},
});

export const ActivityProvider = ({ children }: { children: ReactNode }) => {
    const [activities, setActivities] = useState<Activity[]>([]);

    const addActivity = (activity: Activity) => {
        setActivities((prevActivities) => [...prevActivities, activity]);
    };

    return (
        <ActivityContext.Provider value={{ activities, addActivity }}>
            {children}
        </ActivityContext.Provider>
    );
};