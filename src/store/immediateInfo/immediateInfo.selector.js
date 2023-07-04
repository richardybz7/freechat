import { createSelector } from "reselect";

const selectImmediateInfoState = state => state.immediateInfo

export const selectIsEmailAvailable = createSelector([selectImmediateInfoState], prop => prop.isEmailAvailable)

export const selectLoadingImmedEmails = createSelector([selectImmediateInfoState], prop => prop.loadingImmedEmails)

export const selectAddingImmedEmails = createSelector([selectImmediateInfoState], prop => prop.addingImmedEmails)

export const selectIsRoomDispNameAvailable = createSelector([selectImmediateInfoState], prop => prop.isRoomDispNameAvailable)

export const selectLoadingImmedRoomDispNames = createSelector([selectImmediateInfoState], prop => prop.loadingImmedRoomDispNames)

export const selectAddingImmedRoomDispNames = createSelector([selectImmediateInfoState], prop => prop.addingImmedRoomDispNames)

export const selectIsUserDispNameAvailable = createSelector([selectImmediateInfoState], prop => prop.isUserDispNameAvailable)

export const selectLoadingImmedUserDispNames = createSelector([selectImmediateInfoState], prop => prop.loadingImmedUserDispNames)

export const selectAddingImmedUserDispNames = createSelector([selectImmediateInfoState], prop => prop.addingImmedUserDispNames)

export const selectImmedUserInfos = createSelector([selectImmediateInfoState], prop => prop.immedUserInfos)

export const selectLoadingImmedUserInfos = createSelector([selectImmediateInfoState], prop => prop.loadingImmedUserInfos)

export const selectAddingImmedUserInfos = createSelector([selectImmediateInfoState], prop => prop.addingImmedUserInfos)

export const selectImmedRoomInfos = createSelector([selectImmediateInfoState], prop => prop.immedRoomINfos)

export const selectLoadingImmedRoomInfos = createSelector([selectImmediateInfoState], prop => prop.loadingImmedRoomInfos)

export const selectAddingImmedRoomInfos = createSelector([selectImmediateInfoState], prop => prop.addingImmedRoomInfos)