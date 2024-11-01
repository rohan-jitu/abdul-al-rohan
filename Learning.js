// let fullName ="Abdul Al Rohan";
// let year =19;
// console.log(`My name is ${fullName}, and I'm ${year} years old.`);
// isFollow = true;

// const studentName = {
//     name: "Abdul Al Rohan",
//     year: 19,
//     isPass: true,
//     cgpa: 4.25,
//     collegeName: "Chittagong College",
// }

// studentName.age = studentName.year +10;
// console.log(studentName.year);

// const profile = {
//     profileName: "Abdul Al Rohan",
//     postNumber: 20,
//     followers: 94,
//     following: 14,
//     userName: "rohan_jitu",
//     isVerified: true,
//     profileCategory: "Entrepreneur",
//     profileBio: "Ex. student of Chittagong College.",
// }

// console.log(profile);
// console.log(typeof profile.isVerified,  typeof profile.followers, typeof profile.postNumber);

// // Printing hello world string

// console.log("Hello World")

// //Artithmetic operation

// // let a = 5;
// // let b = 10;
// // let c = a + b;
// // console.log(c);

// //Data type in JavaScript

// let x = 10;
// let y = "10";
// let z = x + y;
// console.log(z);

// //String

// let name = "Abdul Al Rohan";
// console.log(name);

// //Array

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits);

// //Object

// let person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// console.log(person);

// //Conditional Statement

// let age = 18;
// if (age >= 18) {
//   console.log("You are an adult.");
// }
// else {
//   console.log("You are a minor.");
// }

// //Loop

// // for (let i = 0; i < 5; i++) {
// //     console.log(i);
// // }

// //unary operator
// // function myFunction() {
// //     alert("Hello World!");
// //   }
// //   myFunction();

// let a=15;
// let b=6;
// console.log("a = ", a **= b);

// let d=15;
// let e=6;
// c=d**e;

// console.log("c = ", c);
// console.log("d>c", d>c, "d>=c", d>=c, "d<c", d<c, "d<=c", d<=c, "d==c", d==c, "d!=c", d!=c,);

// console.log( (c==d) && (d>=e) || (e<=c) );
// console.log( (d>=e) || (e<=c) );
// console.log( (c==d) && (d>=e) );

//     let yourAge = prompt("Enter your age:");  // Get input and convert to integer

// if (yourAge >= 18 && yourAge <= 40) {  // Check if the age is between 18 and 40
//     console.log("Allowed");
// } else {
//     console.log("Not Allowed");
// }

// let result = (yourAge >= 18 && yourAge <= 60) ? "Allowed" : "Not Allowed";
// console.log(result);

// let num = prompt("Enter a number:");
//  if(num%5 === 0){
//     console.log( num, "is a multiple of 5");
//   } else {
//     console.log( num, "is not a multiple of 5");
//   }

// let score = prompt("Enter your score:");
// if (score >= 80 && score < 100) {
//     console.log("Your grade is A");
// } else if (score >= 70 && score < 80) {
//     console.log("Your grade is B");
// } else if (score >= 60 && score < 70) {
//     console.log("Your grade is C");
// } else if (score >= 50 && score < 60) {
//     console.log("Your grade is D");
// } else if (score >= 0 && score < 50) {
//     console.log("Your grade is F");
// } else {
//     console.log("Invalid result. Please enter a score between 0 and 100.");
// }

// let score = prompt("Enter your score:");
// if (score >= 80 && score < 100) {
//     grade ="A";
// } else if (score >= 70 && score < 80) {
//     grade ="B";
// } else if (score >= 60 && score < 70) {
//     grade ="C";
// } else if (score >= 50 && score < 60) {
//     grade ="D";
// } else if (score >= 0 && score < 50) {
//     grade ="f";
// } else {
//     ("Invalid result. Please enter a score between 0 and 100.");
// }
// console.log("Your grade is", grade);

// loop function

// for (let i = 1; i <= 5; i++) {
//     console.log("My name is Abdul Al Rohan");
//   }

// let n = prompt("Enter your number");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum= sum+i;
// }
// console.log(sum);

// let n = prompt("Enter your number");
// let i=1;
// let sum=0;
// while (i<=n) {
//   i=i+1;
//   sum = sum+i;
// }
// console.log(sum);

// let n = prompt("Enter your number");
// let sum = 0;
// let i = 1;

// do {
//   sum += i;
//   i++;
// } while (i <= n);

// console.log("n =", n);
// console.log(sum);

// do {
//   console.log("My name is Abdul Al Rohan");
//   i = i + 1;
// } while (i <= n);

// let str = "Hello World";
// for ( let i of str) {
//   console.log(i);
// }

// let student = {
//   name: "Abdul Al Rohan",
//   age: 19,
//   college: "Chittagong College",
//   cgpa: 4.25,
//   isPass: true,
// };

// for (let key in student) {
//   console.log("Key=", key,"value=", student[key]);
// }

// for (let i=1; i<=100; i= i+1) {
//   if (i%2 === 0) {
//    console.log("num=",i);
//   }
// }

// // let input = prompt("Enter a number:");
// let gameNumber = Math.floor(Math.random() * 5) + 1;
// if (gameNumber === input) {
//   console.log("You gussed the correct Number!");
// } else {
//   console.log("You gussed the wrong Number! The correct number was", gameNumber);
// }

// string function

// const student ={
//   name: "Abdul Al Rohan",
//   age: 19,
//   college: "Chittagong College",
//   cgpa: 4.25,
//   isPass: true,
// }
// let outPut =`My name is ${student.name}, I'm ${student.age} years old. I'm from ${student.college} and my cgpa is ${student.cgpa}.`
// console.log(outPut);

// let userName = prompt("Enter your full name:");
// let nameWTSpace= userName.replaceAll(" ", "");
// let smallLetter = nameWTSpace.toLowerCase();
// let charaCount = smallLetter.length;
// let suggestedName =`@${smallLetter}${charaCount}`;
// console.log("Your username should be:", suggestedName);

// array function

// let heros = ["rohan", "jitu", "rakib", "shanto", "tuhin", "rakib", "shanto", "tuhin"]

// practice 1

// let markOfStudent = [80, 75, 90, 85, 95];
// let sum = 0;
// for (let val of markOfStudent) {
//   sum = sum + val;
// }
// let average = sum/markOfStudent.length;
// console.log("Average marks of the student is:", average);
// let length = 5+1;
// console.log(length);
// for (let i=0; i<=length; i++) {
//   sum = sum + markOfStudent[i];
//   average = sum/length;
// }

// console.log("Average marks of the student is:", average);

// practice 2

// let intPrice = [250, 645, 300, 900, 50];

// let idx = 0
// for (let val of intPrice) {
//   console.log(`the value is ${idx} = ${val}`);
//   idx++;
//   priceOff = val*0.10;
//   console.log(`The price off is ${priceOff}`);
//   finalPrice = val - priceOff;
//   console.log(`The regular price is ${val} \nBut, after 10\% discount the final price is only "${finalPrice}".`);
// }

// for ( let i=0; i<intPrice.length; i++) {
//   priceOff = intPrice[i]*0.10;
//   finalPrice = intPrice[i] - priceOff;
//   console.log(`The regular price is ${intPrice[i]} \nBut, after 10\% discount the final price is only "${finalPrice}".`);
// }

// practice 4
// let companies = ["Boomberg", "Microsoft", "Google", "Apple", "Tesla", "Amazon", "Meta", "Uber", "Alibaba", "SpaceX", "Samsung", "Tencent", "Sony"];
//   companies.shift(0);
//   companies.splice(6, 1, "ola");
//   companies.push("Amazon");
//   console.log(companies);

//   function myFunction(message) {
//     //statement
//   }

//   function sum(a, b) {
//     sum = a + b;
//     console.log(`the sum of ${a} and ${b} is ${sum}`);
//   }

//   sum( 10, 20);

//   function countVowels(str) {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let char of str) {
//       if (vowels.includes(char)) {
//         count++;
//         console.log(`${char, char, char, char, char, char, char, char, char, char, char, char}`);
//       }
//     }
//   }

//   countVowels("hello world");

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Skill progress circles
  const circles = document.querySelectorAll(".progress-ring__circle");
  circles.forEach((circle) => {
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const percent =
      circle.parentNode.nextElementSibling.querySelector(
        ".skill-percentage"
      ).textContent;
    const offset = circumference - (percent.slice(0, -1) / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  });

  document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".review-track");
    const reviews = document.querySelectorAll(".reviews");
    const reviewWidth =
      reviews[0].offsetWidth +
      parseInt(window.getComputedStyle(reviews[0]).marginRight);
    let currentIndex = 0;

    // Clone the reviews and append them to the track
    reviews.forEach((review) => {
      const clone = review.cloneNode(true);
      track.appendChild(clone);
    });

    function moveCarousel() {
      currentIndex++;
      track.style.transition = "transform 0.5s ease";
      track.style.transform = `translateX(${-currentIndex * reviewWidth}px)`;

      // If we've moved beyond the original set, jump back without transition
      if (currentIndex >= reviews.length) {
        setTimeout(() => {
          track.style.transition = "none";
          currentIndex = 0;
          track.style.transform = `translateX(0)`;
        }, 500); // This should match the transition time
      }
    }

    // Move the carousel every 3 seconds
    let intervalId = setInterval(moveCarousel, 3000);

    // Pause on hover
    track.addEventListener("mouseenter", () => {
      clearInterval(intervalId);
    });

    track.addEventListener("mouseleave", () => {
      intervalId = setInterval(moveCarousel, 3000);
    });
  });

  // Portfolio filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      portfolioItems.forEach((item) => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Form submission
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    const formData = new FormData(form);
    console.log("Form submitted with data:", Object.fromEntries(formData));
    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
  });

  // Intersection Observer for fade-in effect
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Add fade-in class for CSS animation
  const style = document.createElement("style");
  style.textContent = `
      .fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
      }
      @keyframes fadeIn {
          to { opacity: 1; }
      }
  `;
  document.head.appendChild(style);
});
