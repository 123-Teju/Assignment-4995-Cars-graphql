import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
  {
    people {
      id
      firstName
      lastName
    }
  }
`;

export const ADD_PERSON = gql`
  mutation AddPerson($id: String!, $firstName: String!, $lastName: String!) {
    addPerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

export const UPDATE_PERSON = gql`
  mutation UpdatePerson($id: String!, $firstName: String!, $lastName: String!) {
    updatePerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

export const DELETE_PERSON = gql`
  mutation DeletePerson($id: String!) {
    deletePerson(id: $id) {
      id
      firstName
      lastName
    }
  }
`;

export const GET_CARS = gql`
  {
    cars {
      id
      make
      model
      year
      price
      personId
    }
  }
`;

export const ADD_CAR = gql`
  mutation AddCar(
    $id: String!
    $make: String!
    $model: String!
    $year: Int!
    $price: Float!
    $personId: String!
  ) {
    addCar(
      id: $id
      make: $make
      model: $model
      year: $year
      price: $price
      personId: $personId
    ) {
      id
      make
      model
      year
      price
      personId
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation UpdateCar(
    $id: String!
    $make: String!
    $model: String!
    $year: Int!
    $price: Float!
    $personId: String!
  ) {
    updateCar(
      id: $id
      make: $make
      model: $model
      year: $year
      price: $price
      personId: $personId
    ) {
      id
      make
      model
      year
      price
      personId
    }
  }
`;

export const DELETE_CAR = gql`
  mutation DeleteCar($id: String!) {
    deleteCar(id: $id) {
      id
      make
      model
      year
      price
      personId
    }
  }
`;

export const GET_PERSON_WITH_CARS = gql`
  query GetPersonWithCars($id: String!) {
    personWithCars(id: $id) {
      person {
        id
        firstName
        lastName
      }
      cars {
        id
        make
        model
        year
        price
        personId
      }
    }
  }
`;
