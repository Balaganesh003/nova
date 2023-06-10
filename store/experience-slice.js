import { createSlice } from '@reduxjs/toolkit';

const initialPostsState = {
  experienceList: [
    {
      id: '1',
      jobTitle: 'Frontend Developer',
      description:
        'I have worked on React, Redux, Next.js, Tailwind CSS, and more.',
      duration: {
        startMonth: 'Jan',
        startYear: '2020',
        endMonth: 'present',
        endYear: 'present',
      },
      checked: true,
      company: {
        logo: 'https://xsgames.co/randomusers/assets/avatars/pixel/41.jpg',
        name: 'XsGames',
        website: 'https://xsgames.co',
        size: '100-500 employees',
      },
    },
  ],
};

const experienceSlice = createSlice({
  name: 'experience',
  initialState: initialPostsState,
  reducers: {
    addExperience(state, action) {
      const updatedExperience = action.payload;
      console.log(updatedExperience.id);
      if (state.experienceList.some((obj) => obj.id === updatedExperience.id)) {
        const experienceIndex = state.experienceList.findIndex(
          (experience) => experience.id === updatedExperience.id
        );
        state.experienceList[experienceIndex] = updatedExperience;
      } else {
        state.experienceList.push(updatedExperience);
      }
    },
    deleteExperience(state, action) {
      const id = action.payload;
      const updatedExperienceList = state.experienceList.filter(
        (experience) => experience.id !== id
      );
      state.experienceList = updatedExperienceList;
    },
  },
});

export const experienceActions = experienceSlice.actions;

export default experienceSlice;
