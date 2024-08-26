import { apiRequest } from "@/utils/api";

class UserService {

    public async getUser(id: string): Promise<User> {
        return await apiRequest(`user/${id}`);
    }

    public async createUser(user: User): Promise<User> {
        return await apiRequest(`user`, {
            method: 'POST',
            body: JSON.stringify(user),
        });
    }

    public async getUsers(): Promise<User[]> {
        return await apiRequest(`user`);
    }
}

export default UserService;