import { createContext, useContext, useEffect } from "react";

const AuthContext = createContext({});

export const Role = {
    SUPER: "SUPER",
    ADM: "ADM",
    USER:"USER"
}

export function AuthProvider({children}) {
    const [user, setUser] = useState ({
        autenticated: null,
        user: null,
        role: null,
    });

const singIn = async ({email, password}) => {
    if(email === "super@gmail.com" && password === "Super123!"){
        setUser (
            {autenticated: true, 
            user: { id: 1, name: "Super Usuário", email},
            role: role.SUPER,
         });
    }else if(email === "adm@gmail.com" && password === "Adm123!"){
        setUser ({
            autenticated: true, 
            user: { id: 2, name: "Administrador", email},
            role: role.ADM,
         });
    }else if(email === "user@gmail.com" && password === "User123!"){
        setUser ({
            autenticated: true, 
            user: { id: 3, name: "Usuário Comum", email},
            role: role.USER,
         });
    }else {
        setUser ({
            autenticated: false, 
            user: null,
            role:null,
         });
    }
};

const singOut = async () => {
    setUser({});
};


useEffect(()=>{
    console.log("AuthProvider: ", user);
}, [user]);

    return (
        <AuthContext.Provider value={{user, singIn, singOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error ("useAuth must be used within an AuthProvider");
    }
    return context;
}