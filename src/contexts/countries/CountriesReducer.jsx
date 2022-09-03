export default (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case 'GET_COUNTRY':
         return {
            ...state,
            country: payload,
            loading: false,
         };

      case 'GET_COUNTRIES':
         return {
            ...state,
            countries: payload,
            loading: false,
         };

      case 'SET_LOADING':
         return {
            ...state,
            loading: true,
         };

      case 'SET_NOT_FOUND':
         return {
            ...state,
            country: null,
         };

      case 'CLEAR_COUNTRY':
         return {
            ...state,
            country: [],
         };

      default:
         console.error('Invalid action changing countries.');
   }
};
