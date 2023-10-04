import {
    Button,
    Select,
    Option,
    Input,
    Textarea,
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import React, { useState } from 'react';

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        affiliation: '',
        occupation: '',
        title: '',
        message: ''
    });

    const handleChange = (e) => {
        let name, value;

        if (typeof e === 'string' || e instanceof String) { // e가 문자열인 경우
            // 'name' 속성은 해당 Select 컴포넌트의 'name' 속성을 기반으로 결정
            name = e === 'Professor' || e === 'Student' || e === 'Other' ? 'occupation' : 'title';
            value = e;
        } else { // 그 외의 경우, 표준 입력 필드로 간주
            name = e.target.name;
            value = e.target.value;
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!formData.name || !formData.email || !formData.title || !formData.message) {
            alert("Please fill out all required fields.");
            return;
        }

        try {
            const response = await fetch("http://58.122.153.209:9000/api/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' 
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }

            const result = await response.json();

            // Handle response as needed
            alert("The message has been sent successfully.");

        } catch (error) {
            console.error("There was an error:", error);
        }
    };

    return (
        <>
            <PageTitle heading="Want to work with us?">
                Complete this form and we will get back to you in 24 hours.
            </PageTitle>
            <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-screen-lg text-center">
                <div className="mb-8 flex flex-col gap-8 md:flex-row">
                    <Input
                        variant="standard"
                        size="lg"
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        variant="standard"
                        size="lg"
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-8 flex flex-col gap-8 md:flex-row">
                    <Input
                        variant="standard"
                        size="lg"
                        label="Affiliation"
                        name="affiliation"
                        value={formData.affiliation}
                        onChange={handleChange}
                    />
                    <div className="flex w-full flex-col">
                        <Select
                            label="Occupation"
                            outline="true"
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleChange}
                        >
                            <Option value="professor">Professor</Option>
                            <Option value="student">Student</Option>
                            <Option value="other">Other</Option>
                        </Select>
                    </div>
                </div>
                <div className="mb-8 flex gap-8">
                    <div className="flex w-full flex-col">
                        <Select
                            label="Request Type"
                            outline="true"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        >
                            <Option value="order_request">Order request</Option>
                            <Option value="quotation_request">Quotation request</Option>
                            <Option value="other_request">Other request</Option>
                            <Option value="approval_plan_request">
                                Approval plan request
                            </Option>
                        </Select>
                    </div>
                </div>
                <Textarea
                    variant="standard"
                    size="lg"
                    label="Message"
                    rows={8}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" variant="gradient" size="md" className="mt-8">
                    Send Message
                </Button>
            </form>
        </>
    );
}

export default ContactForm;
