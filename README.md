# js-css-variables
## Live Link: https://ravikiran-fullstack.github.io/js-css-variables/


### Learnt how to use and update CSS variables using Javascript

   Declare and Define CSS variables in CSS file
    :root{
      --base: #ffaaff;
      --spacing: 0px;
      --blur: 0px;
    }
    
  Use them to style any components
  img{
      background-color: var(--base);
      padding: var(--spacing);
      filter: blur(var(--blur));
  }

  .hl{
      color: var(--base);
  }
  
  using Javascript access and modify these CSS variables using the below code
  
  ```javascript
         const suffix = this.dataset.sizing || '';
         document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
   ```
  
