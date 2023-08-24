import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endPoint, query) => {
  const [data, setData] = useState([
    {
      employer_name: "Pivotal Solutions",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WY4sNC1cMN1stVyWlt3RGxAvi71E-WW7wrH6&s=0",
      employer_website: null,
      employer_company_type: null,
      job_publisher: "LinkedIn",
      job_id: "ycahk0o6wKsAAAAAAAAAAA==",
      job_employment_type: "CONTRACTOR",
      job_title: "React Developer - REMOTE",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/react-developer-remote-at-pivotal-solutions-3695908951",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.5798,
      job_description:
        "Programming: React (with Next.js), Node.js, TypeScript, GraphQL\n\nTechnologies: AWS (CloudFormation, API Gateway & Lambda, Cognito & IAM), PostgreSQL",
      job_is_remote: true,
      job_posted_at_timestamp: 1692539192,
      job_posted_at_datetime_utc: "2023-08-20T13:46:32.000Z",
      job_city: null,
      job_state: null,
      job_country: "US",
      job_latitude: 37.09024,
      job_longitude: -95.71289,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=ycahk0o6wKsAAAAAAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: "2023-09-19T13:46:31.000Z",
      job_offer_expiration_timestamp: 1695131191,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: null,
        experience_mentioned: false,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: true,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {},
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
    },
    {
      employer_name: "TekStream Solutions",
      employer_logo:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397185357/e42a35192b7a840dd89b19fee6ad51a8.jpg",
      employer_website: "http://www.tekstream.com",
      employer_company_type: null,
      job_publisher: "LinkedIn",
      job_id: "Yy5NDisTvT8AAAAAAAAAAA==",
      job_employment_type: "CONTRACTOR",
      job_title: "React Developer (Reactjs React.js) - Native and Web - REMOTE",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/react-developer-reactjs-react-js-native-and-web-remote-at-tekstream-solutions-3690751660",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.5787,
      job_description:
        "TekStream is seeking a Sr React Developer for our enterprise client. This will be a 6+ month project that is remote\n\nWe are looking for a Sr. Full Stack React Framework Developer/Architect who has experience with web components and React Native. The Developer needs to know how to build great front end apps and also how to architect front end integrations.\n\nRequirements:\n\n· 7-10 years of experience\n\n· Bachelor’s degree or equivalent experience.\n\n· Experience designing for multiple devices and responsive design.\n\n· Excellent organization, communication, interpersonal, and time management skills.\n\n· Enthusiasm for leadership, team management, and mentorship.\n\n· Skilled using React, Angular, JavaScript, API Integrations, SQL, UI Frameworks, Mongo DB\n\nJenkins, AWS, Enterprise projects, etc.\n\nPlease send resumes to chad.cohen@tekstream.com",
      job_is_remote: true,
      job_posted_at_timestamp: 1692381438,
      job_posted_at_datetime_utc: "2023-08-18T17:57:18.000Z",
      job_city: null,
      job_state: null,
      job_country: "US",
      job_latitude: 37.09024,
      job_longitude: -95.71289,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=Yy5NDisTvT8AAAAAAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: "2023-09-17T17:57:18.000Z",
      job_offer_expiration_timestamp: 1694973438,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 84,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: true,
        degree_mentioned: true,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "Full Stack React Framework Developer/Architect who has experience with web components and React Native",
          "The Developer needs to know how to build great front end apps and also how to architect front end integrations",
          "7-10 years of experience",
          "Bachelor’s degree or equivalent experience",
          "Experience designing for multiple devices and responsive design",
          "Excellent organization, communication, interpersonal, and time management skills",
          "Enthusiasm for leadership, team management, and mentorship",
          "Skilled using React, Angular, JavaScript, API Integrations, SQL, UI Frameworks, Mongo DB",
        ],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
    },
    {
      employer_name: "Client of Maven Companies",
      employer_logo: null,
      employer_website: null,
      employer_company_type: null,
      job_publisher: "LinkedIn",
      job_id: "2-ILe_rN_WIAAAAAAAAAAA==",
      job_employment_type: "CONTRACTOR",
      job_title: "React Developer",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/react-developer-at-client-of-maven-companies-3693988352",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.5948,
      job_description:
        "REQUIRED SKILLS:\n• Strong proficiency in JavaScript, CSS, and semantic HTML.\n• Thorough understanding of React.js, its core principles, and workflows.\n• Experience with React Hooks, such as useState, useEffect, useReducer, and Redux.\n• Experience with DevExpress controls and react-beautiful-dnd is a plus.",
      job_is_remote: true,
      job_posted_at_timestamp: 1692369679,
      job_posted_at_datetime_utc: "2023-08-18T14:41:19.000Z",
      job_city: null,
      job_state: null,
      job_country: "US",
      job_latitude: 37.09024,
      job_longitude: -95.71289,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=2-ILe_rN_WIAAAAAAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: "2023-09-17T14:41:19.000Z",
      job_offer_expiration_timestamp: 1694961679,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: null,
        experience_mentioned: true,
        experience_preferred: true,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: true,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "Strong proficiency in JavaScript, CSS, and semantic HTML",
          "Thorough understanding of React.js, its core principles, and workflows",
          "Experience with React Hooks, such as use",
        ],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
    },
    {
      employer_name: "Upwork",
      employer_logo: "https://image.status.io/z6aeO6kAGsAG.png",
      employer_website: "http://www.elance.com",
      employer_company_type: "Computer Services",
      job_publisher: "Upwork",
      job_id: "3jPKNotbsI8AAAAAAAAAAA==",
      job_employment_type: "CONTRACTOR",
      job_title: "Full stack developer in Java and React",
      job_apply_link:
        "https://www.upwork.com/freelance-jobs/apply/Full-stack-developer-Java-and-React_~01571333eb06b267bb/",
      job_apply_is_direct: true,
      job_apply_quality_score: 0.6816,
      job_description:
        "Hi All,\n\nNeed an urgent full stack developer in React js, Spring boot, Java, MySQL and Azure cloud.\n\nMust have more than 5 years of experience in all the technologies.\n\nThis is a daily support job from Monday to Friday for 2 hours.\n\nTiming - Before 10am ist\n\nBudget - 22k inr monthly\n\nPlease send your proposals quickly",
      job_is_remote: true,
      job_posted_at_timestamp: 1692527439,
      job_posted_at_datetime_utc: "2023-08-20T10:30:39.000Z",
      job_city: null,
      job_state: null,
      job_country: "US",
      job_latitude: 37.09024,
      job_longitude: -95.71289,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=3jPKNotbsI8AAAAAAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: null,
      job_offer_expiration_timestamp: null,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 60,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: [
        "Java",
        "Spring Boot",
        "MySQL",
        "React",
        "JavaScript",
        "azure cloud",
      ],
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "Must have more than 5 years of experience in all the technologies",
        ],
        Benefits: ["Budget - 22k inr monthly"],
      },
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113300",
      job_onet_job_zone: "4",
      job_naics_code: "541511",
      job_naics_name: "Custom Computer Programming Services",
    },
    {
      employer_name: "Upwork",
      employer_logo: "https://image.status.io/z6aeO6kAGsAG.png",
      employer_website: "http://www.elance.com",
      employer_company_type: "Computer Services",
      job_publisher: "Upwork",
      job_id: "xIxk2YfkvEIAAAAAAAAAAA==",
      job_employment_type: "CONTRACTOR",
      job_title: "React Developer",
      job_apply_link:
        "https://www.upwork.com/freelance-jobs/apply/React-Developer_~01435b34d77d596bbe/",
      job_apply_is_direct: true,
      job_apply_quality_score: 0.7858,
      job_description:
        "Need React developers with Mern stack coding. Masterful front end development. Foreign language websites, with Potential new features and long term",
      job_is_remote: true,
      job_posted_at_timestamp: 1692389430,
      job_posted_at_datetime_utc: "2023-08-18T20:10:30.000Z",
      job_city: null,
      job_state: null,
      job_country: "US",
      job_latitude: 37.09024,
      job_longitude: -95.71289,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=xIxk2YfkvEIAAAAAAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: null,
      job_offer_expiration_timestamp: null,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: null,
        experience_mentioned: false,
        experience_preferred: false,
      },
      job_required_skills: [
        "Database Development",
        "Website Redesign",
        "Ecommerce Website",
        "React",
        "JavaScript",
        "HTML",
        "Node.js",
        "CSS",
        "HTML5",
        "Web Application",
      ],
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: 15,
      job_max_salary: 30,
      job_salary_currency: "USD",
      job_salary_period: "HOUR",
      job_highlights: {},
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113400",
      job_onet_job_zone: "3",
      job_naics_code: "541511",
      job_naics_name: "Custom Computer Programming Services",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      "X-RapidAPI-Key": "47ea579b3emsh06e61e48b778ac2p1904b8jsn37e719d989e6",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      // uncomment this to fetch data from api
      // const response = await axios.request(options);
      // setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert("Some error occured while fetching");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    fetchData();
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
