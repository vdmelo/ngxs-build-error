import { Store, Mutation } from 'ngxs';

export class UpdateStatus {
    constructor(public readonly payload: string) { }
}

@Store({
    name: 'token',
    defaults: {
    }
})
export class MyStore {
    @Mutation(UpdateStatus)
    updateStatus(state: string, action: UpdateStatus) {
        return action.payload;
    }

}