<script lang="ts">
  let email = '';
  let submitted = false;

  const SUCCESS_MESSAGE = '🎉 Check your inbox for a confirmation email!';

  let notice: { errors: string[] } | { success: string } | {} = {};

  async function signUp(e) {
    e.preventDefault();
    email = email.trim();
    if (!email) return;

    const res = await fetch('https://signup.beanbean.workers.dev', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    console.log(res.status, await res.clone().json());
    if (res.status === 200) {
      notice = {
        success: SUCCESS_MESSAGE,
      };
      submitted = true;
      return;
    };
    const resJson = await res.json();
    console.log(resJson)
    if (resJson.error) {
      notice = {
        errors: [resJson.error],
      };
    } else if (resJson.errors) {
      notice = {
        errors: resJson.errors.map((e) => e.msg),
      };
    } else {
      notice = {
        errors: ['An unexpected error occured. Maybe sign up on Substack directly? https://beanbean.substack.com/']
      };
    }
  }
</script>

<div>
  <form on:submit={signUp} class="side-by-side-wrap" novalidate>
    <input
      type="email"
      name="email"
      bind:value={email}
      placeholder="Type your email..."
      required
    />
    <input type="submit" disabled={submitted} value={submitted ? '✓' : 'Subscribe'} />
  </form>
  <p
    class="notice {Object.keys(notice)[0]}"
    class:visible={notice.success || notice.errors}
  >
    {#if notice.success}
      {notice.success}
    {:else if notice.errors}
      {#each notice.errors as error, i}
        {#if i > 0}
        <br/>
        {/if}
        {error}
      {/each}
    {/if}
  </p>
</div>

<style>
  .side-by-side-wrap {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: center;
  }

  input[type='submit'] {
    margin-top: 0;
    padding: 10px 22px;
    height: 54px;
    background: var(--brand-color);
    border: 1px solid var(--brand-color);
    border-radius: 0 5px 5px 0;
    font-size: 14px;
    font-weight: bold;
    color: white;
  }

  input[type='email'] {
    color: #1a1a1a;
    display: inline-block;
    padding: 10px;
    height: 54px;
    border: 1px solid var(--brand-color);
    border-right-width: 0;
    border-radius: 5px 0 0 5px;
    font-size: 14.5px;
    line-height: 19px;
    -webkit-appearance: none;
    outline: none;
  }

  input[type='submit']:not(:disabled) {
    cursor: pointer;
    min-width: 132px;
  }

  input[type='submit']:disabled {
    opacity: 0.3;
  }

  .notice:not(.visible) {
    color: transparent;
    background-color: transparent;
  }

  .notice {
    font-weight: 600;
    font-size: 12px;
    padding: 6px 10px;
    margin-top: 1px;
    line-height: 12px;
    display: inline-block;
    border-radius: 5px;
  }

  .notice.error {
    color: #ef0700;
    background-color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
  }

  .notice.success {
    font-size: 16px;
    font-weight: normal;
    color: #1a1a1a;
  }
</style>
